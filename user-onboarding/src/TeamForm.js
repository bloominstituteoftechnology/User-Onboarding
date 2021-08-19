import React from 'react'

export default function TeamForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onChange = evt => {
    const {name, values, checked, type} = evt.target
    const valueToUse = type === 'checkbox' ? checked : values;
    change(name, valueToUse);
}

return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='formSubmit'>
            <h2>Add a team member</h2>

            <button disabled={disabled}>submit</button>

            <div className='errors'>

                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.role}</div>
                <div>{errors.preference}</div>

            </div>
            </div>

            <div className='teamInputs'>
                <h4>Fill out information here</h4>

                <div className="teamInfo">
                <label>Name&nbsp;
                    <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>

                <label>Email
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    />
                </label>

                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                    />
                </label>

                <label>Role
                    <select 
                        onChange={onChange}
                        value={values.role}
                        name='role'
                        >

                        <option value=''>- Select a Role -</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Designer'>Designer</option>
                        </select>
                </label>
                </div>

                <h4>Preferred Meeting Style</h4>

                <div className="pref">
                <label>In person
                    <input 
                    type="radio"
                    name="preference"
                    value="in-person"
                    onChange={onChange}
                    checked={values.preference === "in-person"}
                    />
                </label>

                <label>Remote
                    <input 
                    type="radio"
                    name="preference"
                    value="remote"
                    onChange={onChange}
                    checked={values.preference === "remote"}
                    />
                </label>
                </div>
                </div>


                <div className='teamCheckbox'>
                    <h4>Interests</h4>

                    <div className="hobbies">
                    <label>Gaming 
                        <input
                        type="checkbox"
                        name="gaming"
                        checked={values.gaming}
                        onChange={onChange}
                        />
                    </label>

                    <label>Photography
                    <input 
                    type="checkbox"
                    name="photography"
                    checked={values.photography}
                    onChange={onChange}
                    />
                    </label>

                    <label>Coding
                    <input 
                    type="checkbox"
                    name="coding"
                    checked={values.coding}
                    onChange={onChange}
                    />
                    </label>
                    </div>

                </div>



    </form>
)

}