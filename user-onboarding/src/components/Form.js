function Form (props) {

 const { values, change, submit, disabled, errors } = props

 const onSubmit = event => {
    event.preventDefault()
    submit()
}

const onChange = evt => {
    const { name, value, checked, type} = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
}

    return(
        <div>
        <h2>{errors.name}</h2>
        <h2>{errors.email}</h2>
        <h2>{errors.password}</h2>
        <h2>{errors.tos}</h2>
        <form className='form' onSubmit={onSubmit}>
            <label>Name: 
                <input 
                type='text'
                placeholder='Enter a name'
                name='name'
                onChange={onChange}
                value={values.name}
                />
            </label>
            <br/>
            <label>Email:  
                <input 
                type='email'
                placeholder='Enter a valid email'
                name='email'
                onChange={onChange}
                value={values.email}
                />
            </label>
            <br/>
            <label>Password: 
                <input 
                type='password'
                placeholder='Enter a password'
                name='password'
                onChange={onChange}
                value={values.password}
                />
            </label>
            <br/>
            <label>Terms of Service  
                <input 
                type='checkbox'
                name='tos'
                onChange={onChange}
                value={values.tos}
                />
            </label>
            <br/>
            <button disabled={disabled}>Submit</button>
        </form>
        </div>
    )
}

export default Form