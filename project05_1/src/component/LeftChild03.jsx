import React from 'react'
//AppNum이라는 공유 저장소로 접근해서
//count라는 공유값을 1증가시키고 싶어요! 
import { useContext } from 'react'
import { AppNum } from '../App'

const LeftChild03 = () => {

  const share = useContext(AppNum)
  // {
  //   data : count,
  //   setData : setCount
  // }

  const chNum = () =>{
      share.setData(share.data+1)
  }

  return (
    <div>
        <h1>Left03</h1>
        <button onClick={chNum}>PLUS</button>
    </div>
  )
}

export default LeftChild03