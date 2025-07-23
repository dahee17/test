const express = require('express')
const app = express()
const mainRouter = require('./routes/mainRouter')
const userRouter = require('./routes/userRouter')

const cors = require('cors')
app.use(cors())

app.use(express.static(__dirname+'/public'))

// post방식 시 데이터 변환을 위한 미들웨어 
app.use(express.urlencoded({extended : true}))
app.use(express.json())//json 형식으로 사용하겠다


app.use('/', mainRouter)
app.use('/user', userRouter)

//http://localhost:3001/user
app.listen(3001, ()=>{
    console.log('3001 port waiting.. ')
})