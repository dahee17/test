import './App.css'

function App() {

  /* JSX : 하나의 파일 안에 HTML, JS 를 동시 작성하는 확장자
      - 가독성이 좋고, 작성이 쉽다 
      - 기능의 분류에 탁월 
      - 매번 DOM에 접근하지 않더라도 HTML을 변경할 수 있다   

      ** JSX 특징 
      1. JSX expressions must be have one parent element 
      - 여러 요소가 있다면 반드시 하나의 부모요소로 감싸 줄 것 
      - 태그여도 좋고, 태그를 생략한 형태여도 OK
        ex) <div> OK, <> OK , <p> OK 

      2. 표현식 사용 가능 
      - 기본적으로는 return 문 안에 HTML 태그 작성 
      - return 문 안에 JS 문법을 쓰려면 중괄호 {} 안에 작성 
      - 단, if문은 return 문 안에서 사용 불가 

      3. 조건문 사용 
      - return 문 내에 if문을 쓸 수 없기때문에 3가지 방법으로 대체 
      [3-1] 조건에 따른 결과가 2개일 때 : 삼항연산자 
      [3-2] 조건에 따른 결과가 1개일 때 : && 연산자 
      [3-3] 조건에 따른 결과가 3개 이상일때는 return 문 바깥에서 if문 사용]

      4. StrictMode : 검토용 모드 
      - React Project를 2번 실행 
      - main.jsx 로 이동해서 삭제 

      5. class 대신 className 을 사용함 
      6. 끝태그 생략 불가 
        => <br></br> (O)
        => <br/> (O)
        => <br> (X) 

      7. 스타일링 적용 방법 2가지
       - 기존처럼 css 로 적용 
       - 스타일 객체를 속성에 적용

  */

  let name = prompt('이름을 입력하세요.')
  let score = 50
  let grade = 'B'

  if(score > 90) {
    grade = 'A'
  } else if (score > 80){
    grade = 'B'
  } else if (score > 70){
    grade = 'C'
  } else {
    grade = 'F'
  }


  let divStyle = {
    backgroundColor : 'lightpink',
    fontSize : '30px'  
  }


  return (
    <>
      <div style={divStyle}>{name}님의 
        {/* [3-1] */}
        {name === "선영표" ? " React " : " 딥러닝 "}
        페이지입니다.</div>

        {/* [3-2] */}
        {name === "선영표" && <div>환영합니다</div>}

        <hr/>
        {/* [3-3] */}
        <p className='score'>점수 : {score} / 등급 : {grade}등급</p>
      
    </>
  )
}

export default App
