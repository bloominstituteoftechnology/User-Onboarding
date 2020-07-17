import React from 'react'

function User({ userInfo }) {
    if (!userInfo) {
        return <h3>We're fetching the data for your friends</h3>
    }

    return (
        <div className='friend-container'>
            <div className='friend-card'>
                <h2>{userInfo.first_name} {userInfo.last_name}</h2>
                <p>Email: {userInfo.email}</p>
                <p>Password: {userInfo.password}</p>
            </div>
        </div>
    )
}
export default User 