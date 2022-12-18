import {useState, useRef} from 'react'

export default function App() {
  const searchValue = useRef(null)

  const handleSearch = (e) => {
    console.log('클릭했어요!')
    console.log(searchValue)
    console.log(searchValue.current.value)


    // 여기에 fetch 코드가 들어갑니다.
    // fetch(블라블라)
    // ...중략...


    searchValue.current.value = 'hello' 
  }

  return (
    <div>
      <label>
        검색어를 입력하세요 :
        <input type="text" ref={searchValue} />
      </label>
      <button onClick={handleSearch}>검색</button>
    </div>
  )
}
