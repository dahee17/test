import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left01 from './component/Left01'
import Right01 from './component/Right01'
import { createContext } from 'react'


//Context : 데이터 공유 공간
//1. createContext() : 공유 공간 생성
//2. export  : 공유공간 내보내기
export const AppText = createContext()

function App() {
  const [myData, setMyData] = useState('공유데이터')

  return (
    <>
    {/* 3. AppText 라는 공유 공간을 사용할 수 있게끔 허용하겠습니다 */}
    {/* 4. value 라는 속성으로 공유 공간에 공유할 데이터를 지정한다 */}
      <AppText.Provider value={
        {
          data : myData,
          setData : setMyData
        }
      }>
        <Left01></Left01>
        <Right01></Right01>
      </AppText.Provider>
    </>
  )
}

export default App
