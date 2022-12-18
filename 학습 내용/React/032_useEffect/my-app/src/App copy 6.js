import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count+1)
  }

  useEffect(() => {
    if( count !== 0){
      if(count % 2) {
        alert("홀수입니다")
      } else {
        alert("짝수입니다")
      }
    }
  }, [count])

  return(
    <>
    <div>{count}</div>
    <button onClick={countUp}>up!</button>
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