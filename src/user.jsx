import React from 'react';

//component which displays a user's data
const User = props => {


    return(
        <div data-cy={`user-component-${props.user.id}`}>
            <p>{props.user.name}</p>
            <p>{props.user.email}</p>
        </div>
    )
}

export default User;