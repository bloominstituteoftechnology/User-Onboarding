import React from 'react'

function User (props) {

    const { name, email } = props

return (
    <div className='user'>
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
    </div>
)

}

export default User