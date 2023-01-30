const express = require('express');
const bcrypt = require('bcrypt');
const server = express();

//server use
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//db config
const UMIQuery= require('../config/UMIDatabase.umi.js');

//login user
const login = server.post("/submit", (req, res) => {
    const {userName   , passWord} = req.body ;
    console.log(userName);
    res.send({messeger : 'API Successed'})
});

module.exports = login; 