export const ActionButton = ({ text, onclick}) => {
    return <div>
        <button onClick={onclick}>{text}</button>
    </div>
}