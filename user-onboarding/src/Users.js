import React from 'react';

const Users = props => {
    if (props.users.length === 0){
        return <div></div>
    }
            return (
            props.users.map(user => {
                return(
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                    </div> 
                )
            }
        ))        
        
    }


export default Users;