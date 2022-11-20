import react from "react"


const Form = (props) => {
    const {change, submit, errors, users, disabled} = props;
    const { username, email, password, tos} = props.values;

    const onChange = event => {
        const {name,value,checked,type} = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name,valueToUse)

    }

    const onSubmit = event => {
        event.preventDefault();
        submit()
    }
    return(
        <div className="form"> 
            <h1>testing</h1>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <p>{errors.pasword}</p>
            <form onSubmit={onSubmit}> 
                <label>Name:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        />
                </label>
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        />
                </label>
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        />
                </label>
                <label>Terms of Service
                    <input
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={onChange}
                        />
                </label>
                <button disabled={disabled}>Submit</button>
            </form>
            {users.map((user,idx) => (
                <div key={idx} className={`user ${idx}`}>
                    <p>{user.email}</p>
                    <p>{user.createdAt}</p>
                </div>
            ))}
        </div>
        
    )
}

export default Form;