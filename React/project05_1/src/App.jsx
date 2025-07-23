import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftChild01 from './component/LeftChild01'
import RightChild01 from './component/RightChild01'
import { createContext } from 'react'

export const AppNum = createContext()

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <AppNum.Provider value={
        {
          data : count,
          setData : setCount
        }
      }>
        <LeftChild01></LeftChild01>
        <RightChild01></RightChild01>
      </AppNum.Provider>
    </>
  )
}

export default App
