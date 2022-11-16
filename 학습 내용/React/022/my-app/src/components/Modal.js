import React from 'react'

export default function Modal() {
  return (
    <>
    <section id="modal">
    <h2 class="blind">응원화면 모달</h2>
    <article class="modal_wrap">
        <h3 class="blind">응원 문구</h3>
        <p class="tit-modal">화이팅!!</p>
        <p class="cont-modal">당신의 꿈을 응원합니다.</p>
        <img
            class="img-licat"
            src="img/licat.png"
            alt="응원하는 라이이켓"
        />
        <button class="btn-close">
            종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
    </article>
</section>
    </>
  )
}
