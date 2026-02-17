import React, {useState} from "react";

function Counter(){
    const[count,setCount]=useState(0);

    const decrement =()=>{
        setCount(count-1);
    };


return(
    <div>
<h1>Count: {count}</h1>
<button onClick={decrement}>decrease</button>

    </div>


);
}

export default Counter;

