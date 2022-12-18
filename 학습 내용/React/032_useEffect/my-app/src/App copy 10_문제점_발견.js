import { useState, useEffect } from 'react'

export default function App() {
  const [수업여부, set수업여부] = useState('수업중')
  const [잔고, set잔고] = useState(100000)

  const handleZoomOut = (e) => {
    set수업여부('수업종료')
  }

  if (수업여부 === '수업종료' && 잔고 >= 20000){
    alert('카페로 출발!')
    set잔고(90000)
  }

  return (
    <div>
      <button onClick={handleZoomOut}>ZoomOut</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  )
}
