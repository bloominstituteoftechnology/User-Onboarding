

export default function UserComponent(props) {
    console.log(props)
    const { email, name, password } = props

    return (
        <div>
            <br></br>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>password: {password}</div>
            <br></br>
        </div>
    )
}