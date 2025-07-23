import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Join from './component/Join'
import Login from './component/Login'
import MyRandom from './component/MyRandom'
import { Route , Routes} from 'react-router-dom'
import ProHome from './component/ProHome'
import ProDetail from './component/ProDetail'
import LoginS from './component/LoginS'
import LoginF from './component/LoginF'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Join></Join>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logins' element={<LoginS></LoginS>}></Route>
        <Route path='/loginf' element={<LoginF></LoginF>}></Route>

        <Route path='/random' element={<MyRandom></MyRandom>}></Route>

        <Route path='/prohome' element={<ProHome></ProHome>}></Route>
        <Route path='/prodetail' element={<ProDetail></ProDetail>}></Route>
      </Routes>
    </>
  )
}

export default App
