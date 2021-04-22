
export default function Users(props){
    const {user} = props;

    if (!user) {
        return <h3>Working fetching your friend&apos;s details...</h3>
      }
      return (
        <div className='container'>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>
      )
}