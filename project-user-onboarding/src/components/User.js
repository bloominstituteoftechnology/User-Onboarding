



function User({info}){

    if(!info) {
        return <h3>Retrieving User Info...</h3>
    }


    return (
        <div className="user container">
            <h2>{info.name}</h2>
            <p>email: {info.email}</p>
            <p>password: {info.password}</p>
            <p>terms: {info.email}</p>

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


export default User;