import React from 'react';

const Form = (props) => {
    const {change, submit, errors} = props;
    const {name, email, password, terms, checked} = props.values;

    const onChange = (event) => {
        const {name, type, terms, value} = event.target;
        const newVal = type === "checkbox"? checked: value;
        change(name, value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    
    return (
        <div>
            <h1>My Very Neat Form!</h1>
            <p>{errors.name}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.terms}</p>
            <form onSubmit={submit}>
                <label>
                    Name:
                    <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Email:
                    <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}/>
                </label>
                <label>
                    Password:
                    <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}/>
                </label>
                <label>
                    Terms of Service:
                    <input 
                    type="checkbox"
                    name="terms"
                    value={terms}
                    checked={checked}
                    onChange={onChange}/>
                </label>
                <input type="submit" value="Create a Friend"/>
            </form>
        </div>
    )
}
export default Form;