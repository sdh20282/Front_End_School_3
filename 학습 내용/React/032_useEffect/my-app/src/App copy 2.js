import { useState, useEffect } from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  
  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  /*
  useEffect(()=>{
    // state가 변경되어 렌더링 될 때 실행하는 부분!
    // 공부하려고 책 펴는 타이밍!
    return()=>{
    // 다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 그리겠죠?
    // 이 과정에서 지우기 전에 실행되는 부분입니다! clean-up이라고도 하죠. 
    // 여러분들 시험 공부 하나를 마치고 다음 시험 공부 전에 책상 정리하는 느낌이랄까요..
    }
  },[//state값이 들어갑니다.(들어가지 않으면 최초 1번만 실행됩니다.)]) 

  // 컴포넌트가 업데이트 될 때마다 매번 실행
  useEffect(()=>{
    console.log('hello world');
  })

  // 처음에만 실행
  useEffect(()=>{
    console.log('hello world');
  }, [])

  // 변수들의 변화가 일어날 때마다 실행
  useEffect(()=>{
    console.log('hello world');
  }, [변수1, 변수2...])
  */


  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect(()=>{
    if (count % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  }, [count])
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;