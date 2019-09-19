import React from "react";

const Users = (props) => {
    const {userList} =props;
    return (
        userList.map((user) => {
            return( <>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.password}</div>
                <div>{user.checkbox}</div>
               </> )
            
        })
    )
}

export default Users;