import React from'react'

const Form = (props) => {
    const { onChange }= props;
    const { username, email, password, tos } = props.values;

    return (
        <div>
            <h1>Yuh</h1>
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