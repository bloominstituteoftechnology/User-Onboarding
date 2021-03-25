import react from'react'

export default function profile(props){

const { values, submit, change, disable, error} = props

const onChange = (evt) =>{
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
}
const onSubmit = (evt)=>{
    evt.preventDefault();
    
    submit();
    
}
console.log(error)

    return (
        <form onSubmit={onSubmit}>
        <label>Username
            <input
            value={values.username}
            onChange={onChange}
            type='text'
            name='username'
            />
        </label>
            <label>Email
                <input
                value={values.email}
                onChange={onChange}
                type='email'
                name='email'
                />
            </label>
            <label>Password
                <input
                value={values.password}
                onChange={onChange}
                type='password'
                name='password'
                />
            </label>
            <label>TOS
                <input
                value={values.tos}
                onChange={onChange}
                type='checkbox'
                name='tos'
                />
            </label>
            <button>
                Submit
            </button>
        </form>
    )
}