function Test({one}){
    return <div>{one}</div>
  }
  
  function App() {
    return (
      <div>
        <Test {...{one:'hello'}} />
      </div>
    );
  }
  export default App;