import React from 'react'
import { useState, useEffect } from 'react'

const MyRandom = () => {
    let comRanNum = parseInt(Math.random()*50)+1 // 1~50
    //console.log(comRanNum)
    const [inputNum , setInputNum] = useState('')

    //setState 함수가 실행되면 재렌더링 된다
    //--> 컴포넌트 함수가 재실행 된다
    //--> 주의! state 값은 재렌더링에 영향을 안받는다
    const [ranNum , setRanNum] = useState(comRanNum)
    console.log(ranNum)

    //1. random수 생성 1~50


    const [chance ,setChance] = useState(5)
    const [hint, setHint] = useState('')
    //2. 추측이라는 버튼 클릭시 input태그에 적은 숫자와 random 숫자 비교
    const gameStart = () =>{
        //input태그에 적은 숫자와 random 숫자 비교
    //3. 비교시 입력한 숫자가 더 크다면 기회 -1 , hint : 더 작은 숫자 입력
    //4. 비교시 입력한 숫자가 더 작다면 기회 -1 , hint : 더 큰 숫자 입력
        if(inputNum>ranNum){
            setHint('더 작은 숫자 입력')
        }
        else if(inputNum<ranNum){
            setHint('더 큰 숫자 입력')
        }
        setChance(chance-1)
        
        ///setState 실행 위치
    }

    const [result ,setResult] = useState('')
    //useEffect : 화면 내용이 바뀌면(state값이 바뀌면 실행 하겠다)
    // 맨처음 화면이 띄워졌을때  , state이 바뀌었을때
    useEffect(()=>{
        if(chance>=0){
            if(inputNum==ranNum){
                //정답
                setResult('정답')
            }
        }
        else{
            //횟수 초과
            setResult('횟수초과')
        }
    },[])
    
    // *총 기회 수 : 5 
    // 5. 5번안에 맞췄을때만 결과로 '정답'
    // 6. 5번을 넘었다면 결과로 '땡'
  return (
    <div>
        <h1>1~50랜덤 수 맞추기</h1>
        <p>기회 : {chance}</p>
        {/*
         e : 이벤트 객체 (이벤트가 발생한 모든 정보)
         e.target : 이벤트를 발생시킨 주체
         */}
        <input onChange={(e)=>setInputNum(e.target.value)}></input>
        <button onClick={gameStart}>추측</button>
        <p>hint : {hint}</p>
        <h1>결과 : {result}</h1>
    </div>
  )
}

export default MyRandom