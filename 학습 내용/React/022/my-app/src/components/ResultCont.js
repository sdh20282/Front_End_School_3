import React from 'react'

export default function ResultCont() {
  return (
    <>
    <section class="cont-result">
        <h2 class="blind">결과 확인</h2>
        <p class="txt-wannabe">
            당신은
            <strong class="field-result"></strong>
            전문가가 되기 위해서<br />
            대략
            <strong class="time-result"></strong>
            일 이상 훈련하셔야 합니다! :)
        </p>
        <button class="btn-go">훈련하러 가기 GO!GO!</button>
        <button class="btn-share">공유하기</button>
    </section>
    </>
  )
}
