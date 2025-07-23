import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import 별칭 from '파일명' 
// import App from './App.jsx'
// import App from './AppEx.jsx'
import App from './MyEx.jsx'

//렌더링 : 화면 요소를 가지고 와서 띄워지기 까지의 전 과정
createRoot(document.getElementById('root')).render(
    <App />
)
