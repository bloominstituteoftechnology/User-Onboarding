import React from 'react'

const User = (props) => {
    // console.log(props)
    return (
        <article>
            <h3>{props.user.name}</h3>
            <p>{props.user.email}</p>
        </article>
    )
}

export default User