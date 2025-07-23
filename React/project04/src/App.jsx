import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import About from './component/About'

//router : 주소 값을 기준으로 다른 페이지(다른 컴포넌트를 실행 시키겠다)
//Route : 각각의 컴포넌트에 주소값을 대응하는 기능
//Routes : 주소값을 관리 하는 역할
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      {/* /으로 접근했을때 홈컴포넌트를 출력하겠습니다 */}
      <Route path='/' element={<Home></Home>}></Route>
      {/* /about으로 접근했을때 About컴포넌트를 출력하겠습니다 */}
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
    </>
  )
}

export default App
