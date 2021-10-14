import React, {useState} from 'react'






function Form() {
    const [form, setForm] = useState({
        username: "Enter your username",
        email: "Enter your email",
        password: "Enter your password",
        terms: false
        }
    )
let updateForm = event => {
    const {checked, value, name, type} = event.target
    const valueToUse = type === 'checkbox' ? checked : value 
    setForm({...form, [name]:valueToUse})
}



    return (
        <section className='form'>
            <form>
                <label>Username
                    <input onChange={updateForm} value={form.username} name='username' type='text' />
                </label>
                <label>email
                    <input onChange={updateForm} value={form.email} name='email' type='text' />
                </label>
                <label>Password
                    <input onChange={updateForm} value={form.password} name='password' type='password' />
                </label>
                <label> Agree to terms
                    <input onChange={updateForm} checked={form.terms} name='terms' type='checkbox' />
                </label>
            </form>
        </section>
    )
}

export default Form