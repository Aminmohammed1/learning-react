export const CardWrapper = ({title, children}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content"> 
                Nested Content goes here {children}
            </div>
        </div>
    )
}