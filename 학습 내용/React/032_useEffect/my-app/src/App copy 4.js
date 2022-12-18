import { useState, useEffect } from 'react'

function Counter (){
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)
  let test = 0
  
  const handleOneUp = (e) => {
    setOne(one + 1)
  }

  const handleTwoUp = (e) => {
    setTwo(two + 1)
  }

  const handleThreeUp = (e) => {
    setThree(three + 1)
  }

  const handleTestUp = (e) => {
    test += 1
    console.log(test)
  }

  useEffect(()=>{
    if (one % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  }, [one, two])
  
  return (
    <>
      <div>{one}</div>
      <button onClick={handleOneUp}>Up!</button>
      <div>{two}</div>
      <button onClick={handleTwoUp}>Up!</button>
      <div>{three}</div>
      <button onClick={handleThreeUp}>Up!</button>
      {/* 이벤트가 발생해도 재렌더링 되지 않습니다! */}
      <div>{test}</div>
      <button onClick={handleTestUp}>Up!</button>
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