import React from 'react'

//useSearchParams : 쿼리스트링 데이터 다루는 기능
import { useSearchParams } from 'react-router-dom'

const ProDetail = () => {
    //query : 넘겨받은 쿼스트링 데이터
    //setQuery : 넘겨받은 데이터를 수정할 수 있는 기능
    const [query ,setQuery] = useSearchParams();
    //get() -> 쿼스트링에 있는 데이터를 꺼내는 방법(기능)
    console.log(query.get('num'))

  return (
    <div>
        <h1>상세보기 페이지 입니다</h1>
        <p>{query.get('num')}번째 제품 상세 내용</p>
    </div>
  )
}

export default ProDetail