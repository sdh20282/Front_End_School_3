import { useState, useEffect } from "react";

export default function App() {
  const [결혼여부, set결혼여부] = useState("미혼");
  const [잔고, set잔고] = useState(100000);
  const [결혼대상, set결혼대상] = useState("대상없음");

  const handle소개팅 = (e) => {
    set결혼여부("소개팅중");
    set잔고(500000);
    set결혼대상("미정");
  };

  // 퀴즈2 : 잔고가 500000원 미만이고 and 결혼대상이 미정이시면 부모님께서 용돈 200만원을 주십니다.
  useEffect(() => {
    if (잔고 <= 500000 && 결혼대상 == "미정") {
      console.log("부모님이 소개팅하라고 200만원을 주셨다,,");
      set잔고(잔고 + 2000000);
    }
  }, [잔고]);

  // 요규사항 : 소개팅 버튼을 눌렀을 때
  // 결혼여부 -> 소개팅중
  // 잔고 -> 500000
  // 결혼대상 -> 미정
  return (
    <div>
      <button onClick={handle소개팅}>소개팅 go</button>
      <p>{결혼여부}</p>
      <p>{잔고}</p>
      <p>{결혼대상}</p>
    </div>
  );
}