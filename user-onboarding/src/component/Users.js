import React from 'react';

const Users = props =>{
    return(
        <div className="users-list">
        {props.props.map((user, i) =>(
            <div className="user" key={i}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                </div>
        ))}
    </div>
    )

}
export default Users