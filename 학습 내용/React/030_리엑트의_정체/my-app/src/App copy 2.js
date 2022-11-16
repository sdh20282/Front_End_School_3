function One(){
  return <h1>hello world</h1>
}

export default function App() {
  return (
    <div>
      hello
      {console.log(<One/>)}
    </div>
  )
}
