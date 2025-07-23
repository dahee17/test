import React, { use } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [query, setQuery]= useSearchParams();
  console.log(query.get("id"))
  console.log(query.get("pw"))
  console.log(query.get("nick"))


  const [data, setData]= useState('test')

  //주소값을 통해 이동할 수 있는 기능을 물려주겠다!
  const nav = useNavigate();

  const [loginId, setLoginId] = useState('')
  const [loginPw, setLoginPw] = useState('')

  const tryLogin = () =>{

    //1. 사용자가 입력한 ID , PW -> node 서버로 전송
    axios({
      url : 'http://localhost:3001/user/login',
      method:'post',
      data:{
        id : loginId,
        pw : loginPw
      }
    })
    .then((res)=>{
      if(res.data==1){
        nav('/logins')
      }
      else{
        nav('/loginf')
      }
    })
    //2. 노드 서버에서는 넘겨받은 ID, PW 가 DB에 있다면
    //   1을 반환 ---> LoginS 
    //   넘겨받은 ID, PW가 없다면
    //   0을 반환 ---> LoginF

    //물려받은 주소 이동 기능을 사용하겠다! 
    //1. 사용자가 입력한 ID , PW 가져오기
    // loginId
    // loginPw
    //2. 사용자가 입력한 ID 와 회원가입할때 입력한 ID가 같고
    //   사용자가 입력한 PW 와 회원가입할때 입력한 PW가 같다면
    //   --> '로그인 성공입니다' 알림창(alert) 출력
    // if(loginId == query.get('id') && loginPw == query.get('pw')){
    //   //alert('로그인 성공')
    //   //로그인 성공 페이지로 이동 코드
    //   nav(`/logins?nick=${query.get('nick')}`)
    // }
    // else{
    //   //alert('로그인 실패')
    //   //로그인 실패 페이지로 이동 코드
    //   nav('/loginf')
    // }

    //3. 사용자가 입력한 ID, PW 가 둘중 하나라도 
    //   회원가입할때 입력한 ID, PW와 다르다면 
    //   --> '로그인 실패' 알림창 출력

    // nav('/random')
    //useNavigate('/random')
  }

  return (
    <div>
        <h1>React Login</h1>
        ID : <input onChange={(e)=>setLoginId(e.target.value)}></input>
        <br></br>
        PW : <input onChange={(e)=>setLoginPw(e.target.value)}></input>
        <br></br>
        <button onClick={tryLogin}>LOGIN</button>
    </div>
  )
}

export default Login