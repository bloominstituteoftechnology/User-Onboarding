import React from "react";

function Person ({details}) {

    if (!details) {
        return <h3>Working on fetching your person's detail...</h3>
    }

    return (
        <div className="person-container">
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
        </div>
    )
}
















































