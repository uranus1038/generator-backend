const mysql = require('mysql2'); 
const {host , user , password , database} = require('../umi-config.json');
const UMIQuery = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database
  }).promise();

  module.exports = UMIQuery;