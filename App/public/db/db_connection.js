const mysql = require('mysql2');

const dbConfig = {
    host: "sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com",
    port: 3306,
    user: "elipar27",
    password: "dDB8uvq2YNws",
    database: "year_end_2526_t3_elipar27",
    connectTimeout: 10000
}

const conenction = mysql.createConnection(dbConfig);

module.exports = conenction;