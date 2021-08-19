import React from 'react'

function User({ details }) {
    if(!details) {
        return <h3>Working on fetching details...</h3>
    }

    const termsAgreedMsg = details.termsOfService ? 'Yes' : 'No'

    return (
        <div className='user container'>
            <h2>Name: {details.name ? details.name : details.first_name + ' ' + details.last_name}</h2>
            <p>Email: {details.email}</p>
            <p>{details.password ? 'Password: ' + details.password : null}</p>
            <p>{details.termsOfService ? 'Terms Agreed: ' + termsAgreedMsg : null}</p>

            {/* {
                !!details.termsOfService && !!details.termsOfService.length &&
                <div>
                    Terms Of Service: 
                    <ul>
                        {details.termsOfService.map((agreed, idx) => <li key={idx}>{agreed}</li>)}
                    </ul>
                </div>
            } */}
        </div>
    )
}

export default User
