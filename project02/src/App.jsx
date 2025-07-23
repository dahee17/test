import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//3. 컴포넌트 불러오기
import Menu from './component/Menu.jsx'
import Myteam from './component/Myteam.jsx'
import MyState from './component/MyState.jsx'
import MyInsta from './component/MyInsta.jsx'
import Map from './component/Map.jsx'
import Filter from './component/Filter.jsx'
import Todo from './component/Todo.jsx'

function App() {

  return (
    <>
      {/* <a style={} href></a>
    <img src=''></img> */}
      {/* 이름 : 아메리카노  , 가격 : 4100 */}
      {/* props : 컴포넌트끼리의 데이터 전달 방법
      --> 속성값을 통해서 데이터를 전달 할 수 있다
    */}
      {/* <Menu mName="아메리카노" price="4100"></Menu> */}
      {/* 이름 : 카페라떼  , 가격 : 4600 */}
      {/* <Menu mName="카페라떼" price="4600"></Menu> */}

      {/* <Myteam tName="교육운영부" name="선영표"></Myteam>
      <Myteam tName="전략기획" name="강예진"></Myteam>
      <Myteam tName="홍보팀" name="임보미"></Myteam>
      <Myteam tName="기획팀" name="최영화"></Myteam> */}

      {/* <MyState></MyState> */}

      {/* <MyInsta></MyInsta> */}

      {/* <Map></Map> */}
      {/* <Filter></Filter> */}
      <Todo></Todo>

    </>
  )
}

export default App
