import React from 'react'

function User(props){
    const { details } = props
    return(
        <>
        <h2>{details.first_name}{details.last_name}</h2>
        <p>{details.email}</p>
        <p>{details.password}</p>
        </>
    )
    }

    export default User