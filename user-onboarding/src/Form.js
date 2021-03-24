
export default function Form(props) {
    const { form, change, disable, submit } = props

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
                <label>Name
                    <input 
                        name='name'
                        type='text'
                        value={form.name}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                        name='email'
                        type='email'
                        value={form.email}
                        onChange={onChange}
                    />
                </label>
                <label>Password (8 characters minimum)
                    <input 
                        name='password'
                        type='password'
                        value={form.password}
                        onChange={onChange}
                        />
                </label>
                <label>Terms of Service
                    <input 
                        name='tos'
                        type='checkbox'
                        checked={form.tos}
                        onChange={onChange}
                    />
                </label>
                <button disabled={disable}>submit</button> 
            </form>
        </div>
    )
}