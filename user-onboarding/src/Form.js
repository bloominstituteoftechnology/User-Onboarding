import React from 'react';

//************************************ */
//Fill this out once you know what values you need
//************************************ */
const initialFormValues = {};
//************************************ */
//************************************ */

export default function Form(){

    const change = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
      }

    return (
        <>

        {/* <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          /> */}
            <label>Name:
                <input 
                    value={values.name}
                    onChange={change}
                    type='text'
                    name='name'
                />  
            </label>
            <label>Email::
                <input 
                    value={values.name}
                    onChange={change}
                    type='text'
                    name='email'
                />  
            </label>
            <label>Password:
                <input 
                    type='password'
                    name='password'
                    // onChange={change}
                />  
            </label>

            <div class='checkboxs'>
                <label>Agree
                    <input
                        type='checkbox'
                        name='agree'
                        checked={values.hiking}
                        onChange={onChange}
                    />
                </label>
            </div>
        </>
    )
}