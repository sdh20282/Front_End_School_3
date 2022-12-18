// import React, { useState } from 'react';

// function Two() {
//     const [value, setValue] = useState('');
//     function onChange(e) {
//         setValue(e.target.value);
//     }
//     return (
//         <>
//             <input type="text" onChange={onChange}/>
//             <div>
//                 {value}가 강해졌다 돌격해!
//             </div>
//         </>
//     )
// }

// export default Two;

import React from 'react';
import useHojun from '../Hook/useHojun';

function SomethingComponent() {
    const [value, onChange] = useHojun("");
    return (
        <>
            <input type="text" onChange={onChange}/>
            <div>
                {value}가 강해졌다 돌격해!
            </div>
        </>
    )
}
export default SomethingComponent;