const express = require('express')
const router = express.Router()

const path = require('path')
const file_path = path.join(__dirname, "..", "public")

router.get("/", (req, res) => {
    console.log('메인페이지입니다.')
    res.sendFile(file_path + '/main.html')
})

// join페이지
router.get("/join", (req, res) => {
    res.sendFile(file_path + '/join.html')
})
// login
router.get("/login", (req, res) => {
    res.sendFile(file_path + '/login.html')
})
// delete
router.get("/delete", (req, res) => {
    res.sendFile(file_path + '/delete.html')
})
// update
router.get("/update", (req, res) => {
    res.sendFile(file_path + '/update.html')
})

module.exports = router; 
