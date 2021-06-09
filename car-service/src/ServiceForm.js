import React from 'react'

export default function ServiceForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <h2>General Information for Service</h2>
                <label htmlFor='first_name'>First name
                <input
                        id='first_name'
                        type='text'
                        name='first_name'
                        value={values.first_name}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label htmlFor='last_name'> Last Name
                    <input
                        id='last_name'
                        type='text'
                        name='last_name'
                        value={values.last_name}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label htmlFor='year'> Year of Vehicle
                    <input
                        id='year'
                        type='text'
                        name='year'
                        value={values.year}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label htmlFor='make'> Make of Vehicle
                    <input
                        id='make'
                        type='text'
                        name='make'
                        value={values.make}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label htmlFor='model'> Modle of Vehicle
                    <input
                        id='model'
                        type='text'
                        name='model'
                        value={values.model}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label htmlFor='service'>
                    <select
                        id='service'
                        name='service'
                        value={values.service}
                        onChange={onChange}>
                        <option value=''>---Type of Service---</option>
                        <option value='Oil Change'>Oil Change</option>
                        <option value='Alignment'>Alignment</option>
                        <option value='Tire Rotation'>Tire Rotation</option>
                        <option value='Fluid Flush'>Fluid Flush</option>
                        <option value='Saftey Inspection'>Saftey Inspection</option>
                    </select>
                </label>
                <br></br>
                <label htmlFor='terms'>Terms of Service
            <input
                        id='terms'
                        name='terms'
                        type='checkbox'
                        value={values.terms}
                        onChange={onChange}
                    />
                </label>
                <div className='submit'>
                    <button disabled={disabled}>Submit!</button>

                    <div className='errors' >
                        <div>{errors.first_name}</div>
                        <div>{errors.last_name}</div>
                        <div>{errors.year}</div>
                        <div>{errors.make}</div>
                        <div>{errors.model}</div>
                        <div>{errors.service}</div>
                        <div>{errors.terms}</div>
                    </div>
                </div>
            </div>
        </form>
    )
}