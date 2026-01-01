import { useState } from "react";

export const SimpleCounter = () => {
    const [count, setCount] = useState(0);
    console.log("Render phase counter rendered.. with count = ", count)

    const handleClick = () => {
        console.log("Before set count the count is ", count);
        setCount(count+1);
        console.log("Still in render phase, After setCount the count+1 is ", count)
        setCount(count+5);
        console.log("Still in render phase, After setCount the count+5 is ", count)
        setCount(count+10);
        console.log("Still in render phase, After setCount the count+10 is ", count)
        setTimeout(() => {
            console.log("after 2 seconds the count is ", count)
        }, 2000);
    }
    
    return (
        <div>
            <h2>Simple Counter Component</h2>
            <h2>Count {count}</h2>
            <button onClick={ handleClick }>Increment</button>
        </div>
    )
}