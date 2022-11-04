require("dotenv").config();
const mysql = require("serverless-mysql");

const conn = mysql({
    config:{
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD
    }
})

module.exports = conn;