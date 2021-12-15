import React from "react";

const User = (details) => {
    if (!details){
        return <h3>Working on grabbing the data...</h3>
    }

    return (
        <div className="user container">
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
        </div>
    )
}

export default User