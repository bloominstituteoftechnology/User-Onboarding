import React from 'react'
 
function User({details}) {
    if (!details) {
        return <h4>Fetching your user data...</h4>
    }
 
    return (
        <div className='user-container'>
            <div className='user-card'>
                <h5 className='user-name'>{details.username}</h5>
                <p>Email: {details.email}</p>
                <p>Role: {details.role}</p>
            </div>
        </div>
    )
}
 
export default User