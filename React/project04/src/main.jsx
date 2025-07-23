import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// React에서 Router 기능을 사용할 수 있게끔 허용
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // App이라는 컴포넌트에서 Router 기능을 사용할 수 있게끔 허용하겠습니다
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ,
)
