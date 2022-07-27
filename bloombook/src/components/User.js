import React from "react";

function User({details}) {
    if (!details) {
        return <h3>Working... Fetching user details...</h3>
    }

    return (
        <div className="friend-container">
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
        </div>
    )
}

export default User;