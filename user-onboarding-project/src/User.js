import React from 'react'
 
function Submission({details}) {
    if (!details) {
        return <h4>Fetching your user data...</h4>
    }
 
    return (
        <div>
            <h5>{details.username}</h5>
            <p>Email: {details.emaiil}</p>
            <p>Role: {details.role}</p>
            <p>Terms of Service: {details.terms}</p>
        </div>
    )
}
 
export default Submission