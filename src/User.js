import React from 'react' 

function User({details}) {
    if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
    }
return (
    <div className='user container'>
        <h2>{details.username}</h2>
        <p>{details.password}</p>
        <p>Email: {details.email}</p>
        <p>Agree to Terms: Yes {details.termsOfService}</p>
    </div>
)

}



export default User