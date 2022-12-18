import React, { useState } from 'react';

const Parent = () => {
    const [ v, setV ] = useState({
        a: 101,
        b: 'hello',
        c: 'world'
    })

    return (
        <div>
            <Child {...v} />
        </div>
    )
}

const Child = ({a, b, c}) => { 
    return (
        <div>
            <p>{a}</p>
            <p>{b}</p>
            <p>{c}</p>
        </div>
    )
}


function App() {
    return (
        <div>
            <Parent/>
        </div>
    );
}

export default App;