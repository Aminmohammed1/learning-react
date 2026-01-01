import { useState } from "react"

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState(""); 
    
    
    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleLogin = () => {
        if(isLoggedIn){
            setIsLoggedIn(false)
        }
        else {
            setIsLoggedIn(true)
        }
    }
    
    return (
        <>
            <button onClick={handleLogin}>{isLoggedIn ? "LogOut" : "LogIn"}</button>
            <div>
                <input 
                    type="text" 
                    placeholder="Type a message" 
                    value= {message} 
                    onChange={handleChange} />
            <p>{message}</p>
            </div>
            
        </>

    )
}