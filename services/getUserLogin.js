const express = require('express');
const bcrypt = require('bcrypt');
const server = express();

//server use
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//db config
const UMIQuery = require('../config/UMIDatabase.umi');
//login user
const getUser = server.post("/getUser-generator", (req, res) => {
    const {userName   , QUk8sYq_x} = req.body ;
    const passWord = QUk8sYq_x ;
    UMIQuery.query
    console.log(userName);
    res.send({"message" : "API Successed"})  
});

module.exports = getUser; 