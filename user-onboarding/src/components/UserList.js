import '../App.css';

import User from './User'

function UserList (props) {

    const { users } = props

    return (
        <div className='User-List'>
            <h1>Users</h1>
            { users.map( user => { return 
            <User 
            name={user.name} 
            email={user.email} 
            password={user.password}
            tos={user.tos}
            />}
            )
            }
        </div>
    )
}

export default UserList