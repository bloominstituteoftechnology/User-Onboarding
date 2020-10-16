import React from 'react'

const User = ({ details }) => {

    if (!details){
        return "loading..."
    }

    return(
    <p>{details.first_name} {details.last_name}</p>
    )
}

export default User
