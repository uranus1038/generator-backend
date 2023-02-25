const express = require('express');
const bcrypt = require('bcrypt');
const server = express();

//server use
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//db config
const UMIQuery = require('../config/UMIDatabase.umi.js');
//login user
const verify_email = server.post("/verify-email", (req, res) => {
    const { data } = req.body
    console.log(data);
    UMIQuery.query("SELECT * FROM accouts WHERE email = ? ", [data]).then(
        ([result]) => {
            if (result.length === 1)
                res.send({ statusMessage: "ok" })
            else if(result.length === 0)
                res.send({ statusMessage: "none" })
        }
    )
});
const verify_namestar = server.post("/verify-namestar", (req, res) => {
    const { data } = req.body
    console.log(data);
    UMIQuery.query("SELECT * FROM accouts WHERE nametag = ? ", [data]).then(
        ([result]) => {
            if (result.length === 1)
                res.send({ statusMessage: "ok" })
            else if(result.length === 0)
                res.send({ statusMessage: "none" })
        }
    )
});
const verify_userstar = server.post("/verify-userstar", (req, res) => {
    const { data } = req.body
    console.log(data);
    UMIQuery.query("SELECT * FROM accouts WHERE userName = ? ", [data]).then(
        ([result]) => {
            if (result.length === 1)
                res.send({ statusMessage: "ok" })
            else if(result.length === 0)
                res.send({ statusMessage: "none" })
        }
    )
});
//submit creation
const submit= server.post("/submit", (req, res) => {
    const { email , nametag , userName , passWord , birthday , gender  } = req.body
    UMIQuery.query("SELECT accouts FROM accouts WHERE email = ? ", [email]).then(([result])=>
        {
            if(result.length === 1)
            {
                res.send({status:"ok"});
            }else if(result.length === 0)
            {
                res.send({status:"none"});
            }
        })
});

module.exports = verify_email; 
module.exports = verify_namestar; 
module.exports = verify_userstar; 
module.exports = submit; 
