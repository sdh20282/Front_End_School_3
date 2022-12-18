import {useContext, createContext} from 'react'

const UserInfo = createContext({
  name: 'hojun',
  id: 'licat',
  email: 'licat@gmail.com'
})

function One(){
  const {name, id, email} = useContext(UserInfo)
  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
      <p>{email}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <One />
    </div>
  )
}
