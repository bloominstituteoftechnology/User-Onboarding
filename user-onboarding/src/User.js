import React from 'react'

const User = (props) => {
    const {details} = props

    if (!details) {
        return <h3>Help we can't find your team member!</h3>
    }

    return(
        <div className='user container'>
            <h2>{details.first_name}</h2>
            <p>Email: {details.email}</p>
       
        </div>
    )
}

export default User;