const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const exp = require("constants");

const port = 5000;

//dotenv.config({ path: './week5/.env' });

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "nodejsproject"
});


db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Mysql Connected...")
    }
});

const pubilcDriectory = path.join(__dirname, './public');

app.use(express.static(pubilcDriectory));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//define routes
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(port, () => {
    console.log("server started on port " + port);
});