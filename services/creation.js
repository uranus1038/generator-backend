const express = require('express');
const bcrypt = require('bcrypt');
const server = express();

//server use
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//db config
const UMIQuery = require('../config/UMIDatabase.umi.js');
//login user
const creation = server.post("/verify-email", (req, res) => {
    const { email } = req.body
    console.log(email);
    UMIQuery.query("SELECT * FROM accouts WHERE email = ? ", [email]).then(
        ([result]) => {
            if (result.length === 1)
                res.send({ statusMessage: "ok" })
            else if(result.length === 0)
                res.send({ statusMessage: "none" })
        }
    )
});

module.exports = creation; 