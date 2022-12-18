import { useState, useEffect } from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  let test = 0
  
  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  const handleTestCountUp = (e) => {
    test += 1
    console.log(test)
  }

  useEffect(()=>{
    if (count % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  })
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
      <div>{test}</div>
      <button onClick={handleTestCountUp}>Up!</button>
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