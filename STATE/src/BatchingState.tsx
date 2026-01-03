import { useState } from "react";

export const BatchingState = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isActive, setIsActive] = useState(false);
    console.log("Render phase counter rendered.. with count = ", count)


    const handleClick = () => {

        console.log("Before set count the count is ", count);
        setCount((prev) => {
            return prev+1
        });
        setCount((prev) => {
            return prev+5
        });
        setCount((prev) => prev+10);
        setName("Amin")
        setIsActive(true);
    }
    
    
    return (
        <div>
            <h2>Simple Counter Component</h2>
            <h2>Count : {count}</h2>
            <p>Name : {name}</p>
            <p>isActive: {isActive ? "Yes" : "No"}</p>
            <button onClick={ handleClick }>set all three variables</button>
        </div>
    )
}