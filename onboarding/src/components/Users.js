import React from 'react'
import User from './User'

export default function Users(props) {
    const { users } = props;
    const { name, email } = users;

    return (
        <div>
            {
                users.map(user => {
                    return <User name={user.name} email={user.email} />
                })
            }
        </div>
    )
}