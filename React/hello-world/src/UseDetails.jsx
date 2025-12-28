export const UserDetails = ({ 
    name, isOnline, hideOffline, isPremium, isNewUser, role 
}) =>{
    if(hideOffline && !isOnline) {
        return null;
    }

    let roleBadge = null;
    if ( role == "admin") {
        roleBadge = <span> Admin</span>
    } else if(roleBadge == "moderator"){
        roleBadge = <span> Moderator </span>
    } else {
        roleBadge = <span> VIP </span>
    }

    return (
        <div>
            <h3>
                {name}
                {isPremium && <span>⭐</span>}
                {isNewUser && <span>🆕</span>}
                {roleBadge}
            </h3>
            <span>{isOnline?"Available" : "Offline"}</span>
            <p>{isOnline ? "Available to chat now" : "is Offile not available now"} </p>
            {
                isOnline? (
                    <button>Send Message</button>
                ) : (
                    <small>Check back later</small>
                )
                // <button>{isOnline? "Chat now" : "Check on later"}</button>
            }    
        </div>
    );
};