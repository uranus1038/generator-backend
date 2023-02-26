const express = require('express');
const server = express();
const cors = require('cors'); 
const {port} = require('./umi-config.json');
//server use
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors()) ; 
//api service 
const login = require('./services/getUserLogin');
const creation = require('./services/creation');

// route api 
server.use('/api/login',login);
server.use('/api/creation',creation);

server.listen(port , ()=>
{
    console.log('Start server port => '+port);
})