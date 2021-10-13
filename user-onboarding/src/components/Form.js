function Form (props) {

 const { change } = props

    return(
        <form className='form'>
            <label>Name: 
                <input 
                type='text'
                placeholder='Enter a name'
                name='name'
                onChange={change}
                />
            </label>
            <br/>
            <label>Email:  
                <input 
                type='email'
                placeholder='Enter a valid email'
                name='email'
                onChange={change}
                />
            </label>
            <br/>
            <label>Password: 
                <input 
                type='password'
                placeholder='Enter a password'
                name='password'
                onChange={change}
                />
            </label>
            <br/>
            <label>Terms of Service  
                <input 
                type='checkbox'
                name='tos'
                onChange={change}
                />
            </label>
            <br/>
            <button>Submit</button>
        </form>
    )
}

export default Form