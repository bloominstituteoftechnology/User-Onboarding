import React from 'react'

export default function Form(props) {
    const {members, values, change} = props


    
    const handleChange = (evt)=>{
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };
    return (
        <div>
            <h1> Render me!</h1>

            <form>
                <label>Name:
                    <input type='text' name='name' value={values.name} onChange={handleChange}/>
                </label>
                <br></br>
                <label>Email:
                    <input type='email' name='email' value={values.email} onChange={handleChange}/>
                </label>
                <br></br>
                <label> Password:
                    <input type='password' name='password' value={values.password} onChange={handleChange}/>
                </label>
                <br></br>
                <label> Sign Your Life Away?
                    <input type='checkbox' name='terms' checked={values.checked} onChange={handleChange}/>
                    {/* Checkbox doesn't use value like other form inputs because value returns "on/off" instead of "true/false" checked={values.checked} This makes our our input controlled by state.  */}
                </label>
                <br></br>
                <button> Send It </button>
            </form>
        </div>
    )
}
