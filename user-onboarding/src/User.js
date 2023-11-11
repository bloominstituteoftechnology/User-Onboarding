import React from 'react'

function User(props){
    const { details } = props
    return(
        <>
        <h2>Name: {details.first_name}{details.last_name}</h2>
        <p>Email: {details.email}</p>
        <p>Password: {details.password}</p>
        <p>Career: {details.career}</p>
        </>
    )
    }

    export default User