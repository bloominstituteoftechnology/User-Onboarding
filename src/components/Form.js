import React from 'react'

const Form = (props) => {

    const { change, values } = props

    const onChange = (event) => {
        const { name, value } = event.target
        change(name, value)
    }

    const onSubmit = () => {

    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={onChange}
                value={values.name}
            />

            <label htmlFor="email">Email:</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={onChange}
                value={values.email}
            />

            
            <label htmlFor="password">Email:</label>
            <input
                id="password"
                name="password"
                type="text"
                onChange={onChange}
                value={values.password}
            />

            <label>
                <input
                    type="checkbox"
                    name="terms"
                    value={values.terms}
                    checked={values.terms}
                    onChange={onChange}
                />
                Terms of Service.
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form
