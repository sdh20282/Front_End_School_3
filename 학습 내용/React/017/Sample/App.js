import { One } from "./components/One.js";

// let One = require('./One');
// let Two = require('./Two');

export function App(){
    return (
        <div>
            <p>hello world</p>
            {/* {10+10} */}
            {/* <One/> */}
            {One()}
        </div>
    )
}