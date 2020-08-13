import React from 'react'

function User({ details }) {
    if (!details) {
        return <h3>Working fetching your friend&apos;s details...</h3>
    }

    return (
        <div className='friend-container'>
            <div className='friend-card'>
                <h2>{details.first_name} {details.last_name}</h2>
                <p>Email: {details.email}</p>
                <p>Password: {details.password}</p>

                {
                    !!details.tos && !!details.tos.length &&
                    <div>
                        Hobbies:
              <ul>
                            {details.tos.map((like, idx) => <li key={idx}>{like}</li>)}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}
export default User 