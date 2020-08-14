import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1 onClick={()=>setCount(count-1)}>-</h1>
            <span>{count}</span>
            <h1 onClick={()=>setCount(count+1)}>+</h1>
        </div>
    )
}

export default Counter