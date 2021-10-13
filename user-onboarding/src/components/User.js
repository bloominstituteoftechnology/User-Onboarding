import React from 'react'

function User (props) {

    const { firstname, lastname, email, img } = props

return (
    <div className='user'>
        <div>
        <h3>Name: {firstname} {lastname}</h3>
        <p>Email: {email}</p>
        </div>
        <div>
            <img src={img} />
        </div>
    </div>
)

}

export default User