export default function Members(props) {
    const { details } = props
  
    if (!details) {
      return <h3>Fetching the Members&apos;s details...</h3>
    }
  
    return (
      <div className='Members container'>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
    )
  }