export default function UserInfo({details}) {
    if(!details) {
        return <h4>Attempting to gather user information...</h4>
    }

    return (
        <div className='new user'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </div>
    )
}