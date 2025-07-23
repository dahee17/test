import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

const Join = () => {
  const nav = useNavigate();

  const [inputId, setInputId]= useState('')
  const [inputPw, setInputPw]= useState('')
  const [inputName, setInputName]= useState('')
  const [inputMbti, setInputMbti] = useState('')
  const [inputSong, setInputSong] = useState('')

  const tryJoin = () =>{
    //사용자가 입력한 id, pw ,nick
    // 쿼리스트링으로 주소에 추가해주자!
    // 쿼리스트링 구조  : 주소?key=value&key=value
    axios({
      url : 'http://localhost:3001/user/join',
      method : 'post',// 정의하지 않는다면 'GET'
      data:{
        id : inputId,
        pw : inputPw,
        name : inputName,
        mbti : inputMbti,
        song : inputSong
      }
    })
    .then((res)=>{
      //통신 후 실행 시킬 로직
      console.log(res)
      //회원가입에 성공했다면--> 로그인페이지
      if(res.data == 1){
        nav('/login')
      }
      //회원가입에 실패했다면 --> alert('회원가입 실패')
      else{
        alert('회원가입 실패')
      }

    })

    //nav(`/login?id=${inputId}&pw=${inputPw}&nick=${inputNick}`)
  }

  return (
    <div>
        <h1>즐거운 React Join</h1>
        ID : <input onChange={(e)=>setInputId(e.target.value)}></input>
        <br></br>
        PW : <input onChange={(e)=>setInputPw(e.target.value)}></input>
        <br></br>
        NAME : <input onChange={(e)=>setInputName(e.target.value)}></input>
        <br></br>
        MBTI : <input onChange={(e)=>setInputMbti(e.target.value)}></input>
        <br></br>
        SONG : <input onChange={(e)=>setInputSong(e.target.value)}></input>
        <br></br>
        <button onClick={tryJoin}>Join</button>
    </div>
  )
}

export default Join