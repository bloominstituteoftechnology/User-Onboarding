import React from 'react'

function User (props) {

    const { name, email, password, tos} = props

return (
    <div>
        <h3>Name: {/*userdetails.name*/}</h3>
        <p>Email: {/*userdetails.email*/}</p>
    </div>
)

}

export default User