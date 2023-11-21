const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("<h1> HELLO WORLD </h1>")
})

app.listen()