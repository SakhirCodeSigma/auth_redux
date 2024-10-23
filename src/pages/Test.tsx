// import { useState, useEffect, useRef } from "react";
//
// function Test () {
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);
//
//     useEffect(() => {
//         count.current = count.current + 1;
//     });
//
//     return (
//         <>
//             <input
//                 type="number"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <h1>Render Count: {count.current}</h1>
//         </>
//     );
// }
//
// export default  Test;

import { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []); // <- add empty brackets here

    return <h1>I've rendered {count} times!</h1>;
}

export default Timer;