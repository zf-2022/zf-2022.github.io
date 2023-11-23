const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cp = require("cookie-parser");
const dotenv = require("dotenv");

require("dotenv").config();
dotenv.config({ path: './week5/.env' });

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "nodejsProject"
});

//function of login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).render("login", {
                message: "Please provide and email and a password"
            })
        }

        db.query("SELECT * FROM users WHERE email = ?", [email], async (error, result) => {
            console.log(result);
            if (!result || !(await bcrypt.compare(password, result[0].password))) {
                res.status(401).render("login", {
                    message: "Email or password incorrect"
                })
            } else {
                const id = result[0].id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("the token is: " + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie("jwt", token, cookieOptions);
                res.status(200).redirect("/profile");
            }
        })

    }
    catch (error) {
        console.log(error);
    }
}

//function of login
exports.logout = async (req, res) => {
    res.cookie("jwt", "logout", {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(200).redirect("/");
}


exports.register = (req, res) => {
    console.log(req.body);
    const { name, email, password, passwordConfirm } = req.body;


    db.query("SELECT email FROM users WHERE email = ?", [email], async (error, result) => {
        if (error) {
            console.log(error);
        }
        if (result.length > 0) {
            return res.render("register"), {
                message: "Email is already used.."
            }
        }
        else if (password !== passwordConfirm) {
            return res.render("register", {
                message: "Passwords do not match"
            });



        };

        //hashing password
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);


        db.query("INSERT INTO users SET ?", { name: name, email: email, password: hashedPassword })

        if (error) {
            console.log(error)
        } else {
            console.log(result);
            return res.render("register", {
                message: "User Registered"
            });
        }



    });


    //res.send("form submitted")
};
