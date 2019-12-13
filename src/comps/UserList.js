import React from 'react';
import UserInfo from './UserInfo';

export default function UserList({users}) {
    return (
        <div className="user-list">
            {users.map((user, index) => <UserInfo {...user} key={index}/>)}
        </div>
    )
}