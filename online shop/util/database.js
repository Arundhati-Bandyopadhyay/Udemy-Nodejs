const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'sqluser',
    database:'nodejsDB',
    password:'Arundhati@58'
})

module.exports=pool.promise();