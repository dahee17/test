import React from 'react'

//useNavigate : 주소값을 바꿀 수 있는 기능(React Hook)
import { useNavigate } from 'react-router-dom'


const About = () => {

    const nav = useNavigate();

    const chPage = () =>{
         nav('/')
        // if(true){
        //     nav('/')
        // }
        // else{

        // }      
    }

  return (
    <div>
        <h1>About 페이지 입니다</h1>
        <button onClick={chPage}>홈페이지로 이동</button>
    </div>
  )
}
export default About