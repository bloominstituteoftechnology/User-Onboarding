import React from 'react';

export default function Form(props){
    const { values, change, submit, errors, disabled } = props

    const onSubmit = (y => {
        y.preventDefault()
        submit()
    })

    const onChange = (y => {
        const { name, value, type, checked } = y.target
        const usedValues = (type === "checkbox") ? checked : value 
        change(name, usedValues) 
    })

    return(
        <form classname = "form holder" onSubmit = {onSubmit}>
            <div className = "form submit">
                <h2>Hop on the Battle Bus!</h2>
                

                <div classname="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                   
                </div>
                <div className = "form inputs">
                    <h3>Please fill this out while looting</h3>
                    <label>
                        Name
                        <input 
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text" />
                    </label>
                    <label>
                        Email
                        <input
                        value = {values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                        />
                    </label>
                    <label>
                        Password
                        <input
                            value = {values.password}
                            onChange = {onChange}
                            name= "password"
                            type = "text"
                        />
                    </label>
                    
                       
                        <br /><button>Submit</button>
                    </div>
                </div>
            
        </form>
    )
}
