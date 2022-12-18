function Test({one}){
    return <div>{one}</div>
  }
  
  function App() {
    const test = {one:'hello'}
    return (
      <div>
        <Test test={test} />
        <Test {...test} />
      </div>
    );
  }
  export default App;