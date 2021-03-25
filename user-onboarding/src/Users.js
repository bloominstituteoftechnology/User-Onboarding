export default function Users(props) {
    const { details } = props
    return (
        <div className='user'>
            <h3>{details.name}</h3>
            <h4>{details.email}</h4>
            <pre>{JSON.stringify(details)}</pre>
        </div>
    )
}