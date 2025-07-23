//rafce --> 컴포넌트 생성 단축키
import React from 'react'

const MyEx = () => {
    //1. 사용자로 부터 '월 ~ 일' 요일을 입력 받는다
    //2. 월요일을 제외한 다른 요일 이 입력 됬다면 검은색(기본) 글씨 출력 
    //3. 월요일 입력 됬다면 빨간색 글씨로 출력 시켜주세요!
    let day = prompt('요일을 입력해주세요');

    let myColor = 'black';
    if(day === '월요일'){
        myColor='red'
    }

    let myStyle={
        color : myColor
    }

  return (
    <div>
        <h1 style={myStyle}>{day}</h1>
    </div>
  )
}

export default MyEx