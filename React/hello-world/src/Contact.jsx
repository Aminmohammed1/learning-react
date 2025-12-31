import { ActionButton } from "./ActionButton"
export const Contact = () => {
    const sendMessage = () => {
        alert("sending your message...")
    }

    return (
        <div>

            <div> Contact us </div>
            <ActionButton text="send message" onclick={sendMessage}/>
        </div>
    )
}