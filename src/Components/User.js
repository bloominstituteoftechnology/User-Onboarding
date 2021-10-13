import React from "react";

function User(details) {
    if (!details) {
        return <h3>Finding new users details!</h3>
    }

    return (
        <div>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
        </div>
    )
}

export default User