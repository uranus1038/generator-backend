const express = require('express');
const server = express();
const cors = require('cors'); 
const {port} = require('./umi-config.json');
//server use
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors()) ; 
//api service 
const login = require('./services/login');

// route api 
server.use('/api/login',login);

server.listen(port , ()=>
{
    console.log('Start server port => '+port);
})