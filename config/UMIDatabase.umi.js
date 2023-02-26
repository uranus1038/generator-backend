const mysql = require('mysql2/promise'); 
const {host , user , password , database} = require('../umi-config.json');
const UMIQuery = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database
  });
  module.exports = UMIQuery;