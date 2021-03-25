
export default function Form(props) {
    const { form, change, disable, submit, errors } = props

    const onChange = event => {
        const {name, value, type, checked} = event.target
        const valueToAdd = type === 'checkbox' ? checked : value
        change(name, valueToAdd)
    }
    
    const onSubmit = event => {
        event.preventDefault();
        submit();
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name: 
                        <input 
                            name='name'
                            type='text'
                            value={form.name}
                            onChange={onChange}
                        />
                        <h4 className='errors'>{errors.name}</h4>
                    </label>
                </div>
                <div>   
                    <label>Email: 
                        <input 
                            name='email'
                            type='email'
                            value={form.email}
                            onChange={onChange}
                        />
                        <h4 className='errors'>{errors.email}</h4>
                    </label>
                </div>    
                <div>   
                    <label>Password (8 characters minimum): 
                        <input 
                            name='password'
                            type='password'
                            value={form.password}
                            onChange={onChange}
                        />
                        <h4 className='errors'>{errors.password}</h4>
                    </label>
                </div>
                <div className='role'>
                    <label> Role: 
                        <select 
                            name='role'
                            type='dropdown'
                            value={form.role}
                            onChange={onChange}
                        >
                            <option value=''>-- Select a Role --</option>
                            <option value='frontend'>Frontend</option>
                            <option value='backend'>Backend</option>
                            <option value='fullstack'>Fullstack</option>
                            <option value='data-science'>Data Science</option>
                            <option value='machine-learning'>Machine Learning</option>
                        </select>
                        <h4 className='errors'>{errors.role}</h4>
                    </label>    
                </div>     
                <div>
                    <label>Terms of Service (required):
                        <input 
                            name='tos'
                            type='checkbox'
                            checked={form.tos}
                            onChange={onChange}
                        />
                        <h4 className='errors'>{errors.tos}</h4>    
                    </label>
                </div>    
                <div>
                    <button disabled={disable}>submit</button> 
                </div>
            </form>
        </div>
    )
}