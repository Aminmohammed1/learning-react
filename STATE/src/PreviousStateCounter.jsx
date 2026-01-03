import { useState } from "react";

export const PreviousStateCounter = () => {
    const [count, setCount] = useState(0);
    console.log("Render phase counter rendered.. with count = ", count)


    const handleClick = () => {

        console.log("Before set count the count is ", count);
        setCount((prev) => {
            console.log("Still in render phase, After setCount the count+1 is ", count)
            return prev+1
        });
        setCount((prev) => {
            console.log("Still in render phase, After setCount the count+5 is ", count)
            return prev+5
        });
        setCount((prev) => prev+10);
    }
    
    
    return (
        <div>
            <h2>Simple Counter Component</h2>
            <h2>Count {count}</h2>
            <button onClick={ handleClick }>Increment</button>
        </div>
    )
}