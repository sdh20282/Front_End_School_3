import './app.css';
import { One } from './components/One.js'
import { Two } from './components/Two.js'

function App() {
  const style = {backgroundColor:"black", color:"white"};
  return (
    <div>

      <div style={{backgroundColor:"black", color:"white"}}>hello world 1</div>
      <div style={style}>hello world 2</div>
      {/* error */}
      {/* <div style="color:red;">hello world 3</div> */}

      <One/>
      <Two/>
      {/* <h2>hello</h2> */}
      {/* <h2>
      hello
      </h2> */}

      <h2 className="hi">hello</h2>
      <h2 className="hello">hello</h2>

      {/* <h2 class="hi">hello</h2>
      <h2 class="hello">hello</h2> */}
    </div>
  );
}

export default App;