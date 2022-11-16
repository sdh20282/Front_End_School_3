function One(){
  return <h1>hello world</h1>
}

function Two(props){
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  )
}

export default function App() {
  return (
    <div>
      {console.log(<One/>)}
      <Two>
        <h2 className="twoclass" key="100">hello world</h2>
        <p>hello world</p>
      </Two>
    </div>
  )
}
