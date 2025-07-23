import React from 'react'
import { useSearchParams } from 'react-router-dom'

const LoginS = () => {
    const [query, setQuery] = useSearchParams();
  return (
    <div>
        <h1>로그인 성공 페이지</h1>
        <h1>{query.get('nick')}님 환영합니다</h1>
    </div>
  )
}

export default LoginS