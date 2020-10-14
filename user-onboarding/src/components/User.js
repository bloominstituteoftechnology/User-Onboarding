import React from "react"; 

function User({ details }) {
    if(!details) {
        return <h3>Fetching user details. . .</h3>
    }

    return(
        <div className="userContainer">
            <h2>{`${details.first_name} ${details.last_name}`}</h2>
            <p>Email: {details.email}</p>
            <p>Password: accepted</p>
            <p>Terms and Conditions: accepted</p>
        </div>
    )
}

export default User;