import { useState, useEffect } from 'react'

export default function App() {
  const [결혼여부, set결혼여부] = useState('미혼')
  const [잔고, set잔고] = useState(1000000)
  const [결혼대상, set결혼대상] = useState('대상없음')

  const handle소개팅 = () => {
    set결혼여부('소개팅중')
    set잔고(500000)
    set결혼대상('미정')
  }

  // 00를 붙여서 5천만원으로 올리면 반복횟수가 늘어납니다.
  if (잔고 <= 500000 && 결혼대상 === '미정') {
    set잔고(잔고 + 2000000);
    alert(잔고);
  }

  // 퀴즈2 : 잔고가 500000원 이하이고 and 결혼대상이 미정이시면 부모님께서 용돈 200만원을 주십니다. 최종 잔고를 띄어주세요.
  return (
    <div>
      <button onClick={handle소개팅}>소개팅 Go</button>
      <p>{결혼여부}</p>
      <p>{잔고}</p>
      <p>{결혼대상}</p>
    </div>
  )
}