import React from "react"


export default function Form(props){
    const{values,change,submit,errors} = props;

    const onSubmit = evt=>{
        evt.preventDefault();
        submit();
    }

    const onChange = evt=>{
        const {name,value,checked,type} = evt.target;
        const valToUse = type === 'checkbox'?checked:value;
        change(name,valToUse);
    }

    return(
    <div>
        <p>{errors.name}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.tos}</p>
        <form onSubmit={onSubmit}>
            <label>Name:
                <input
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={onChange}
                />
            </label>
            <label> Email:
                <input
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            <label>Password:
                <input
                    name='password'
                    type='password'
                    value={values.password}
                    onChange={onChange}
                />
            </label>
            <label>Terms of Service:
                <input
                    name='tos'
                    type='checkbox'
                    checked={values.tos}
                    onChange={onChange}
                />
            </label>
            <input
                type='submit'
                value='Create New User!'
            />
        </form>
    </div>
    )
}