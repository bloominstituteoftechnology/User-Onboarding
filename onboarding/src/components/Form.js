const Form = ({ reactSubmit, userForm, user, disabled }) => {

    const preventSubmit = (e) => {
        e.preventDefault()
        reactSubmit()
    }

    return(
        <form onSubmit={e => {preventSubmit(e)}}>
            <label >
                Name
                <input type="text" name="name" value={user.name} onChange={userForm}/>
            </label>
            <label>
                Email
                <input type="mail" name="email" value={user.email} onChange={userForm}/>
            </label>
            <label>
                Password
                <input type="text" name="password" value={user.password} onChange={userForm}/>
            </label>
            <label>
                I accept the terms of service
                <input type="radio" name="termOfUse" value={user.termOfUse} onChange={userForm}/> 
            </label>
            <label>
                <input type="submit" disabled={disabled}/>
            </label>
        </form>
    )
}

export default Form 