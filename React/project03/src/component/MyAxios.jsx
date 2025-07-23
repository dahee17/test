import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

const MyAxios = () => {

    //1. 맨 처음 페이지에 들어가게 되면 2020년01월01일 기준으로 영화 데이터 출력
    // --> useEffect(맨처음 랜더링됬을때 , 재랜더링 됬을때->state값이 바뀌었을때)
    useEffect(()=>{
        axios({
            //url : 통신할 서버의 주소
            url : 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d13e24e3cf8bb56e86acc6b313a18b38&targetDt=20200101',
            method : 'GET'
        })
        .then((res)=>{
            //res : 통신으로 받아온 데이터(서버응답데이터)
            setMovieData(res.data.boxOfficeResult.dailyBoxOfficeList)
        })
    },[])


  //let movieData=[];
  const[movieData , setMovieData] = useState([])
  const[inputDate , setInputDate] = useState('')

 const getData = () =>{

    //axios 사용해서 데이터 가져오기
    axios({
        //url : 통신할 서버의 주소
        url : 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d13e24e3cf8bb56e86acc6b313a18b38&targetDt='+inputDate,
        method : 'GET'
    })
    .then((res)=>{
        //res : 통신으로 받아온 데이터(서버응답데이터)
        
        //통신 성공시 실행할 로직
        console.log('통신성공')
        console.log(res)
        console.log(res.data.boxOfficeResult.boxofficeType)
        console.log(res.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm)

        setMovieData(res.data.boxOfficeResult.dailyBoxOfficeList)
    })
   
 }
  return (
    <div>
        <h1>영화 데이터 비동기 통신(Axios)</h1>
        <input onChange={(e)=>setInputDate(e.target.value)}></input>
        <button onClick={getData}>데이터 가져오기</button>
        <table border={1}>
            <tr>
                <td>영화순위</td>
                <td>제목</td>
                <td>개봉일</td>
            </tr>
            {/* 영화 정보들을 출력 시켜주세요! */}
            {/* JSX 에서 숫자 ,문자열, 날짜 는 바로 출력 가능
                객체는 출력 불가능
            */}
            {/* 
                [
                    {
                    movieNm : "미션임파서블",
                    rank :1,
                    openDt : '2020-01-01'
                    },
                    {
                    movieNm : "미션임파서블",
                    rank :1,
                    openDt : '2020-01-01'
                    },
                    {}
                    .
                    .
                    .
                ]
            */}
            {/* 
            map : 배열 안에 요소를 한번씩 순차적으로 전부 접근해서
                  모든 항목의 데이터를 원하는 형식으로 바꿔주는 함수
            item : map함수를 통해서 접근한 배열의 요소
            index : item에 대응되는 배열의 인덱스
            */}
            {movieData.map((item, index)=>
                <tr key={index}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{item.openDt}</td>
                </tr>
            )}
        </table>
    </div>
  )
}

export default MyAxios