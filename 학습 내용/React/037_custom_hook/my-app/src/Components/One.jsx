// import React, { useState } from 'react';

// function One() {
//     const [value, setValue] = useState('');
//     function onChange(e) {
//         setValue(e.target.value);
//     }
//     return (
//         <>
//             <input type="text" onChange={onChange}/>
//             <div>
//                 {value}
//             </div>
//         </>
//     )
// }

// export default One;

import React from 'react';
import useHojun from '../Hook/useHojun';

function One() {
    const [value, onChange] = useHojun("");
    return (
        <>
            <input type="text" onChange={onChange}/>
            <div>
                {value}
            </div>
        </>
    )
}
export default One;