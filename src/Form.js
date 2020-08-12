import React from 'react';

const Form = () => {
    return(
        <form>
            <label htmlFor = "name">
                Name
                <input type = "text" 
                       name = "name"
                       value = ''
                       onChange = ''
                />
            </label>
            <label htmlFor = "email">
                Email
                <input type = "email" 
                       name = "email"
                       value = ''
                       onChange = ''
                />
            </label>
            <label htmlFor = "password">
                Password
                <input type = "password" 
                       name = "password"
                       value = ''
                       onChange = ''
                />
            </label>
            <label htmlFor = "terms">
                Terms of Service
                <input type = "checkbox" 
                       name = "terms"
                       checked = ''
                       onChange = ''
                />
            </label>
            <button type = "submit">Submit</button>
        </form>
    )
}

export default Form;