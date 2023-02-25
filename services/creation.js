const express = require('express');
const bcrypt = require('bcrypt');
const server = express();

//server use
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//db config
const UMIQuery = require('../config/UMIDatabase.umi.js');
//random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 9999) + 1;
}
//submit creation
const submit= server.post("/submit", async (req, res) => {
    const { email , nametag , userName , passWord , birthday , gender  } = req.body
    const accout = "member";
    const  date = new Date();
    const name = `${nametag}#${generateRandomNumber()}`
    const passHash =  bcrypt.hashSync(passWord,10);
    await UMIQuery.query("SELECT email FROM accouts WHERE email = ? ", [email]).then(([result])=>
        {
            if(result.length === 1)
            {
                res.send({status:"email-active"});
            }else if(result.length === 0)
            {
                UMIQuery.query("SELECT * FROM accouts WHERE userName = ? ", [userName]).then(([result])=>
                {
                    if(result.length === 1)
                    {
                        res.send({status:"name-active"});
                    }
                    if(result.length === 0)
                    {
                        UMIQuery.query("INSERT INTO accouts (email ,userName , passWord , birthday , gender ,date ,nametag ,accout) VALUES (?,?,?,?,?,?,?,?) ",
                         [email,userName ,passHash ,birthday,gender,date,name,accout ]).then(([result])=>{

                        }).then(()=>
                        {
                            res.send({status:"successed"});
                        })
                    }

                })
                
            }
        })
});

module.exports = submit; 
