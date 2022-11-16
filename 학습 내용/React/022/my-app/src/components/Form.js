import React from 'react'

export default function Form() {
  return (
    <>
    <form class="cont-inp">
        <p class="txt-wannabe">
            나는
            <input
                id="inp-field"
                type="text"
                placeholder="예) 프로그래밍"
                required
            />
            전문가가 될 것이다.
        </p>
        <p class="txt-time">
            그래서 앞으로 매일 하루에
            <input
                id="inp-time"
                type="number"
                placeholder="예) 5"
                required
            />
            시간씩 훈련할 것이다.
        </p>
        <button type="button" class="btn-exc">
            나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
    </form>
    </>
  )
}
