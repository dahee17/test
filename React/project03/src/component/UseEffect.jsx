import { useState } from "react"
import { useEffect } from "react"

const UseEffect = () => {

    /* LifeCycle : React 컴포넌트의 생성부터 소멸까지 이르는 일련의 과정
        각 과정마다 특정 시점에 원하는 동작을 하도록 구현되어있음 
        => 다만 LifeCycle은 이제 안쓰는 classComponent 에서만 사용 가능한 기능 
        => Function component에서도 사용할 수 있도록 만들어 낸 기능 : useEffect 
         
    */

    // 1번 순서 : 변수, state, 함수 등 화면 구성에 필요한 값들을 초기화 
    console.log('1. 함수가 초기화되었습니다.')
    const [num, setNum] = useState(0)

    // 3번 순서 : 화면이 전부 다 세팅되고 나서 실행하는 구간 
    // - API Calling 
    //   왜? 무거운 데이터를 다 가져올때까지 기다렸다가 화면을 띄우면
    //      사용자들은 사이트가 느리다고 판단 => 사용자 경험에 부정적 
    //      화면의 뼈대를 우선 출력 시키고, 무거운 API 호출 

    useEffect(() => {
        console.log('3. 화면 렌더링이 완료되었습니다')
    }, [])


    // 변화를 감지하고, 변화했을 때 실행하는 구간
    useEffect(()=>{
        console.log('num이 변경됐네요!')
    },[num])


    // useEffect 사용법
    // useEffect(함수, [변화를감지할값])
    // 만약 배열이 비워져있으면 첫 화면 렌더링때만 실행 




    return (
        <div>
            {console.log('2. 화면이 렌더링되는 과정...')}
            UseEffect {num}
            <button onClick={() => { setNum(num + 1) }}>+1</button>
        </div>
    )
}

export default UseEffect