import { useState } from "react";
import { LoginCard } from "./LoginCard";

export const Counter = () => {
    // const [count, setCount] = useState(0)
    const [count, setCount] = useState(() => {
        console.log("initial state loaded with vlue");
        return 0;
    })
    const [message, setMessage] = useState("");

    // var count = 0;

    console.log(
        "counter componnent rendered with count value", count
    )
    
    const handleClick = () =>{
        // count = count + 1;
        // console.log(count)
        setCount(count+1)
    }


    return (
        <>
            <button onClick={handleClick}>Count : {count} </button>
           
        </>
    )

}
