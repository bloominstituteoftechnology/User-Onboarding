import React from 'react'

function Users({users}){
    if(!users){
        return<h3>Please enter a user</h3>
    }
    return(
        <div className='user'>
            <p>{users.name}</p>
            <p>{users.email}</p>
        </div>
    )
}

export default Users

