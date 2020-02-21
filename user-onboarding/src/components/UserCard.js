import React from 'react';

function UserCard(props) {
    return (
        <div>
            <h2>Name: {props.user.name}</h2>
            <p>Email: {props.user.email}</p>
            
        </div>
    )
}
export default UserCard;