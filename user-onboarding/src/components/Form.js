import React from 'react'

export default function Form(props) {
    const { values } = props;
    
    const onChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target.value);
    }

    return (
        <div>
            <form>
                <label>
                    <input 
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={onChange}
                    />
                </label>
            </form>
        </div>
    )
}
