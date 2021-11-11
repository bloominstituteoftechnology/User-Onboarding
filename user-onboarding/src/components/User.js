import React from "react";

export default function User(props) {
    const { id, email, username } = props;
    return (
        <div>
            <h2>{username}</h2>
        </div>
    )
}