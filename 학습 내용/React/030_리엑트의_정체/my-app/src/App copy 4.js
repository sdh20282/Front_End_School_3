function App() {
  
  const Test = <h1>hello 1</h1>
  console.log(Test) // object
  
  const TestTwo = [<h1 key="one">hello 1</h1>, <p key="two">hello 1</p>]
  console.log(TestTwo)

  console.log(typeof(TestTwo))
  console.dir(TestTwo)

  return (
      <div>
          {/* {[<h1>hello 1</h1>]} */}
          {[<h1 key="one">hello 1</h1>, <p key="two">hello 1</p>]}
      </div>
  );
}

export default App;