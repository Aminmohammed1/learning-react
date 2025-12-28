import { UserInfo } from "./UserInfo"
export const UserCard = ( {id, ...rest} ) => {

    //export const UserCard = ( props ) => {
        // instead of taking in all the props separately
        // can directly pass pros like this {...props} called spread
    return <>
        <div>
            <h2>User {id} Details</h2>
            <UserInfo {...rest} />
        </div>
    </>
}