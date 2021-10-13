import '../App.css';
import User from './User'

function UserList (props) {

    const { users } = props
    console.log(users)

    return (
        <div className='User-List'>
            <center><h1>Users</h1></center>
            <div>
            { users.map((user) => <User 
            name={user.name} 
            email={user.email} 
            password={user.password}
            tos={user.tos}
            />
            )
            }</div>
        </div>
    )
}

export default UserList