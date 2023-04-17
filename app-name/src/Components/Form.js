import React from'react'

const Form = (props) => {
    const { onChange, onSubmit }= props;
    const { username, email, password, tos } = props.values;

    onChange= (e) => {
        const { name, value, checked, type} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    } 

    onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>Yuh</h1>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}></form>
            <form>
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
                <label>Terms of Service:
                    <input 
                        type="checkbox"
                        name="tos"
                        value={checked}
                        onChange={onChange}
                    />
                </label> 
                <input type="submit" value="Create a friend"/>
            </form>
        </div>
    )
}


export default Form;