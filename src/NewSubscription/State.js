import { useState } from "react";

let initialState = 0;

const State =()=> {
    const [count, setCount] = useState(initialState)

    let Increment =()=>{
        setCount(count+2);
    } 
    return(
        <>  
            <h1>{count}</h1>
            <button name="increment" onClick={Increment} style={{ color:'red' }}>Increment</button>
            
        </> 
    )
}
export default State;