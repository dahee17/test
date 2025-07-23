import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProHome = () => {
  const nav = useNavigate();

  const tryDetail = (e) =>{
    //e.target  : 이벤트를 발생시킨 주체(태그)
    // 쿼리스트링 : 주소?key=value 
    console.log(e.target.value)
    nav(`/prodetail?num=${e.target.value}`)
  }

//   const tryDetail2= ()=>{
//     nav('/prodetail?num=2')
//   }

  return (
    <div>
        <button value="1" onClick={tryDetail}>1번째 상세보기</button>
        <hr></hr>
        <button value="2" onClick={tryDetail}>2번째 상세보기</button>
        <hr></hr>
        <button value="3" onClick={tryDetail}>3번째 상세보기</button>
    </div>
  )
}

export default ProHome