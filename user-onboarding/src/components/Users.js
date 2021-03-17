import React from 'react'

function User(props) {
    const { info, errors } = props
    return (
        <div> 
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
            <li> Name: {info.name} Email: {info.email} Password: {info.password} </li>
        </div>
)
}

export default User