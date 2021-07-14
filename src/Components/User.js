import React from 'react'

function User ({info}) {

    if(!info) {
        return <p>Retrieving Information...</p>
    }

    return (
        <div className = "userinfo">
            <h3>{ info.name }</h3>
            <p>E-mail: { info.email } </p>
            <p>Password: { info.password }</p>
            <p>Terms Agreed? { info.terms }</p>

            {!!info.terms && !!info.terms.length && (
                <div>
                    Do you agree to the Terms of Service?
                    <ul>
                        {info.terms.map((like, idx) => (
                             <li key={idx}>{like}</li>
                        ))}
                    </ul>
                </div>    
            )}
        </div>


    )
}

export default User 