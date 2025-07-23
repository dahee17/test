import './App.css'
import Data from './component/Data'
import MyAxios from './component/MyAxios'
import MyRandom from './component/MyRandom'
import RSP from './component/RSP'
import UseEffect from './component/UseEffect'
function App() {

  return (
    <>  
        {/* 데이터 양방향 통신 */}
        {/* <Data></Data> */}

        {/* LifeCycle이 필요한 이유를 확인하기 위한 가위바위보 */}
        {/* <RSP></RSP> */}
        {/* <MyRandom></MyRandom> */}
        <MyAxios></MyAxios>

        {/* useEffect 동작 순서 확인*/}
        {/* <UseEffect></UseEffect> */}
    </>
  )
}

export default App
