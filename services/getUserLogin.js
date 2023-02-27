const express = require('express');
const bcrypt = require('bcrypt');
const server = express();

//server use
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//db config
const UMIQuery = require('../config/UMIDatabase.umi.js');
//login user
const getUser = server.post("/getUser-generator", async(req, res) => {
    const {userName   , QUk8sYq_x} = req.body ;
    console.log(userName, QUk8sYq_x);
    const passWord = QUk8sYq_x ;
    await UMIQuery.query("SELECT * FROM accouts WHERE userName = ?",[userName]).then(([result])=>
    {
        if( result.length === 1)
        {
            if (bcrypt.compareSync(passWord, result[0].passWord)) {
                UMIQuery.query("SELECT * FROM accouts WHERE userName = ?",[userName]).then(([result])=>
                {
                    const OBJECT = {"status":"successed","data":{"namestar":result[0].nametag , "gender":result[0].gender}}
                    return res.send(JSON.stringify(OBJECT));
                })
                
            } else {
                return res.send({"status":"fail"});
            }
        }
        else
        {
            return res.send({"status":"none"});
        }
    })
});

module.exports = getUser; 