export default function UserList(props) {
    return(
        <div>
            {props.Users.map(user => {
                return <p>{user.name}: {user.email}</p>
            })}
        </div>
    )
}