const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cp = require("cookie-parser");

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "nodejsProject"
});

exports.register = (req, res) => {
    console.log(req.body);
    const { name, email, password, passwordConfirm } = req.body;


    db.query("SELECT email FROM users WHERE email = ?", [email], async (error, result) => {
        if (error) {
            console.log(error);
        };
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

        const saltRounds = 8;
        // let hashedPassword = await bcrypt.hash(password, saltRounds);
        //console.log(hashedPassword);
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                // returns hash
                console.log(hash);
            });
        });
    });


    res.send("form submitted")
};
