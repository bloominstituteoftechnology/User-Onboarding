import React, { useState, useEffect } from 'react';
const UserDisplay = (props) => (

    <div>
        {console.log('this is props', props)}
        <h2>User List: </h2>
        {props.users.map(user => (
            <div key={user.id}>Name:  {user.name}   Email: {user.email}</div>
        ))}
    </div>
)


export default UserDisplay;