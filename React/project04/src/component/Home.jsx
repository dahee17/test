import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>홈페이지 입니다</h1>
        <a href='/about'>About 페이지 이동</a>
        <br></br>
        {/* 
        React 에서는 주소값 변경시 새로 고침 되지 않는 
        Link 사용을 추천한다
        */}
        <Link to='/about'>About 이동 2</Link>
    </div>
  )
}

export default Home