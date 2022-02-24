import React from 'react'

function NewMemberInfo (props) {
    const {details} = props
    return (
    <div className= "individual container">
        <header>WELCOME TO Our Newest Member, {details.first_name}!</header>
        <h2>You will receive an email to complete your onboarding</h2>

        <p> Email: {details.email}</p>
        <p>Password: "*****"</p>
        <p>terms of service (checkbox)</p>
    </div>
    )
}


export default NewMemberInfo


 