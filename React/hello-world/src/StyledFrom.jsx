export const StyledFrom = () => {
    return <>
        <form className="contact-form">
            <label htmlFor="username">UserName:</label>
            <input type = "text" placeholder="Your name" className="form-input" />
            <br/>
            <label htmlFor="email">Email:</label>
            <input type = "email" id = "email" placeholder=" Your email " className="form-input" tabIndex="1"/>
        </form>
    </>
}