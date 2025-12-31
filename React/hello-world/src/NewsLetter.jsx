import { ActionButton } from "./ActionButton"

export const NewsLetter = () => {
    const subscribed = () => {
        alert("thanks for subscribing to newsletter..")
    }
    
    
    return (
        <div>
            <div> Subscribe to news letter</div>
            <ActionButton text = "subscribe" onclick={subscribed}/>
        </div>
    )
}