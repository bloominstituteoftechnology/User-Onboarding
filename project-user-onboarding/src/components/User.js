



function User({info}){

    if(!info) {
        return <h3>Retrieving User Info...</h3>
    }


    return (
        <div className="user container">
            <img src={info.avatar} alt=""/>
                                     
            <h2>{info.name}{info.first_name} {info.last_name}</h2>
            <p>email: {info.email}</p>


            {!!info.terms && !!info.terms.length && (
                <div>
                    Do you agree to the Terms of Service?
                    <ul>
                        {info.terms.map((like, idx) => (
                             <li key={idx}>{like}Yes</li>
                        ))}
                    </ul>
                </div>    
            )}
        </div>
    )
}


export default User;