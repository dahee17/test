import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const RSP = () => {

    // STEP 1-1. pos 라는 배열 안에 '가위', '바위', '보' 라는 데이터를 넣고
    //      1-2. map 함수를 이용해서 아래에 가위바위보 버튼 3개 생성 
    //      1-3. gameStart 라는 함수를 생성하고
    //      1-4. 세개의 버튼을 눌렀을 때 모두 gameStart 라는 함수를 호출 
    //      1-5. console 창으로 gameStart 함수호출 체크 
    //         ** 이따가 gameStart를 호출할 때 매개변수를 보내줄거기때문에
    //            함수 안에 함수로 호출 

    // STEP 2-1. 내가 필요한 state를 미리 정리 
    //           (myChoice, comChoice, result, round)

    //      2-2. 사용자가 버튼을 누를 때 마다, (gameStart가 호출될 때 마다)
    //          사용자가 누른 버튼의 내용을 myChoice 에 세팅 
    //      2-3. 랜덤한 숫자를 추출해서 상대의 내용을 뽑아낸뒤 comChoice 에 세팅 
    //      2-4. 라운드의 숫자를 하나씩 +1 
    //      2-5. 승부를 판별 (if문 사용)

    //      ** 결과 : 버튼을 누를 때 마다 전의 결과가 나오거나, 두번 눌러야 실행됨 

    let pos = ['가위', '바위', '보']

    const [myChoice, setMyChoice] = useState("")
    const [comChoice, setComChoice] = useState("")
    const [result, setResult] = useState("게임 전")
    const [round, setRound] = useState(0)

    // round가 변경될때마다
    useEffect(() => {
        console.log('현 라운드', round)

        if(round !== 0) {
            if (comChoice === myChoice) {
                setResult('무승부')
            } else if (myChoice === "가위") {
                comChoice === "보" ? setResult('승리') : setResult('패배')
            } else if (myChoice === "바위") {
                comChoice === "가위" ? setResult('승리') : setResult('패배')
            } else if (myChoice === "보") {
                comChoice === "바위" ? setResult('승리') : setResult('패배')
            }
        }

    }, [round])

    const gameStart = (item) => {
        console.log('gameStart 함수 호출!', item)
        // console.log('랜덤한 수 추출하기', parseInt(Math.random()*3))
        // console.log('상대의 선택', pos[parseInt(Math.random()*3)])

        setComChoice(pos[parseInt(Math.random() * 3)])
        setRound(round + 1)
        setMyChoice(item)


    }


    return (
        <div>
            <h1>가위바위보 {round}라운드</h1>
            <div>
                <p>나의 선택 : {myChoice}</p>
                <p>상대의 선택 : {comChoice}</p>
            </div>
            <h2> 결과 : {result}</h2>
            <hr />
            {/* 버튼3개 */}
            {pos.map(item => <button
                key={item}
                onClick={() => { gameStart(item) }}>{item}</button>)}
        </div>
    )
}

export default RSP