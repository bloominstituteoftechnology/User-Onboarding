import react from'react'

export default function profile(props){

const { values, submit, change, disabled, error} = props

const onChange = (evt) =>{
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
}
const onSubmit = (evt)=>{
    evt.preventDefault();
    submit();
}


    return (
    <form onSubmit={onSubmit}>
        <label>username
            <input
            value={values.username}
            onChange={onChange}
            type='text'
            name='username'
            />
        </label>

        <label>email
            <input
            value={values.email}
            onChange={onChange}
            type='email'
            name='email'
            />
        </label>

        <label>password
            <input
            value={values.password}
            onChange={onChange}
            type='password'
            name='password'
            />
        </label>

        <label>tos
            <input
            type='checkbox'
            name='tos'
            checked={values.tos}
            onChange={onChange}
            />
        </label>

        <button disabled={disabled}>
            Submit
        </button>

    </form>
    )
}