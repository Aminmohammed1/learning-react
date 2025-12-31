export const CustomButton = ({text}) => {
    const name = "CodeVolution";


    const handleClick = (e) => {
        // console.log("Which component was clicked ..", e.target)
        // console.log("Click coordinates .. ", e.clientX,e.clientY)
        // console.log("button was clicked", e.button)
        // alert("Thanks for liking")
        console.log(`Hey ${name} you have clicked ${text}`)
    }
    
    
    
    return <div> 
        {/* <button onClick={() => {alert("Thanks for liking..")}}>Like</button> */}
        <button onClick={handleClick}>{text}</button>
    </div>
}