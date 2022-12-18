import { createContext } from 'react'

// props drilling을 하지 않고 직접 Three 컴포넌트에 값을 내려줄 수 있음, 파일이 달라도 import 해서 사용 가능
const Value = createContext({price:1000})

function Three(){
  return (
    <Value.Consumer>
      {(value) => (<p>{value.price}</p>)}
    </Value.Consumer>
  )
}

function Two(){
  return (
    <div>
      Two
      <Value.Provider value={{price:2000}}>
        <Three/>
      </Value.Provider>
    </div>
  )
}

function One(){
  return (
    <div>
      One
      <Two/>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <One/>
    </div>
  )
}
