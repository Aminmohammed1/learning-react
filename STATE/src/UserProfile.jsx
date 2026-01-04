import { useState } from "react";

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        address: {
            street: "123 Main St",
            city: "Anytown",
            country: "USA"
        }
    });

    const updateName = () => {
        setUser({
            ...user,
            name: "Jane Smith"
        });
    }

    const updateEmail = () => {
        setUser({
            ...user,
            email: "updatedEmail.@example.com"
        })
    }

    const updateAddress = () => {
        setUser({
            ...user,
            address:{
                ...user.address,
                city:"Gotham City",
                country:"CANADA"
            }
    })
}

    return (
        <>
            <h2>User Profile Component</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street}, {user.address.city}, {user.address.country}</p>

            <button onClick={updateName}>Update Name</button>
            <button onClick={updateEmail}>Update Email</button>
            <button onClick={updateAddress}>Update Address</button>
        </>
    )
}