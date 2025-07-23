// DB에 대한 정보 

const mysql = require('mysql2')
const conn = mysql.createConnection({
    host : 'localhost'
    ,port : 3306
    ,database : 'nodejs'
    ,password : '12345' // 여러분은 1234나 본인 비번으로 
    ,user : 'root' 
})

conn.connect() 
console.log('DB 연결 완료!')
module.exports = conn; 