const express = require('express')
const router = express.Router()

// DB 연결 
const conn = require('../config/db')

// 회원가입의 기능 라우팅 
//http://localhost:3001/user/join
router.post('/join', (req,res)=>{
      console.log('접근 확인')
      console.log('user join', req.body)

     let {id, pw, name, mbti, song} = req.body
    console.log('id', id)

    let sql = "INSERT INTO NODEJS_MEMBER VALUES (?,?,?,?,?)"
    conn.query(sql, [id, pw, name, mbti, song], (err, rows)=>{
        console.log('rows', rows)
        if(rows.affectedRows > 0) {
            //응답을 json 형태로 하겠습니다
            res.json(1)
        } else {        
            res.json(0)
        }
    })
})

// 로그인 기능 라우팅 
router.post('/login', (req, res)=>{
    console.log(req.body)
    let {id, pw} = req.body
    let sql = "SELECT ID FROM NODEJS_MEMBER WHERE ID=? AND PW=?"
    conn.query(sql, [id, pw], (err, rows)=>{
        console.log('rows:', rows)
        console.log('length:', rows.length)
        //rows(DB 응답 내용)--> 배열
        if(rows.length > 0) {
            res.json(1)
        } else {
            res.json(0)
        }
    })

 })


// 회원 탈퇴 기능 라우팅
router.post('/delete' , (req,res)=>{
    console.log('req.body:', req.body)
    let {id, pw, mbti} = req.body
    console.log(id,pw,mbti)

    let sql = "DELETE FROM NODEJS_MEMBER WHERE ID=? AND PW=? AND MBTI=?"
    conn.query(sql, [id,pw,mbti], (err,rows)=>{
        console.log('rows:', rows)
        if(rows.affectedRows > 0){
            // 삭제 성공
            res.redirect('/')
        } else {
            // 삭제 실패 
            res.send('<script>alert("정보를 다시 확인하세요.");window.location.href="/delete"</script>')
        }
    })
})

// 정보 수정 라우팅 
router.post('/update', (req, res)=>{
    console.log(req.body)
    let {id, newSong} = req.body 
    console.log(id, newSong)

    let sql = "UPDATE NODEJS_MEMBER SET SONG=? WHERE ID = ?"
    conn.query(sql, [newSong, id], (err,rows)=>{
        console.log('rows', rows)
        if(rows.affectedRows > 0){
            res.send('<script>alert("노래가 변경되었습니다."); window.location.href="/"</script>')
        } else {
            res.send('<script>alert("잘못된 정보입니다."); window.location.href="/update"</script>')

        }
    })
})


module.exports = router; 