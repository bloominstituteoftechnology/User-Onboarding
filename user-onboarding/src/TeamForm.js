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
        
        const { name, value, checked, type } = evt.target
        console.log({name, value, checked, type});
        const valueToUse = type === 'checkbox' ? checked : value;
      
        change(name, valueToUse);
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='formSubmit'>
                <h2>Add a team member</h2>

                <button id='submitBtn' disabled={disabled}>submit</button>

                </div>

                <div className='errors'>

                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.role}</div>
                    <div>{errors.preference}</div>

                </div>
            

            <div className='teamInputs'>
                <h4>Fill out information here</h4>

                <div className="teamInfo">
                    <label>Name&nbsp;
                        <input
                            value={values.username}
                            onChange={onChange}
                            name='username'
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
                            value="In Person"
                            onChange={onChange}
                            checked={values.preference === "In Person"}
                        />
                    </label>

                    <label>Remote
                        <input
                            type="radio"
                            name="preference"
                            value="Remote"
                            onChange={onChange}
                            checked={values.preference === "Remote"}
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

            <div className="terms">
            <h4>Terms and Conditions </h4>

            <div className="termsPara">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur, felis a pellentesque tempus, arcu neque dictum nisi, 
                eu venenatis nulla nibh in velit. Fusce id dictum metus. Mauris iaculis, nibh et euismod faucibus, urna purus vulputate turpis, 
                cursus efficitur augue lacus ut sem. Nullam finibus in mauris a ultrices. Integer blandit tincidunt nisl, ut congue augue vulputate 
                sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula, lectus sit 
                amet feugiat gravida, felis sem sodales diam, non placerat metus dui non erat. Cras rutrum ligula id fermentum maximus. 
                Mauris lacus erat, aliquet in neque sed, faucibus volutpat lacus.</p>
                </div>

                    <div className="termsBox">
                    <label>Yes, I agree to these terms of service
                    <input 
                    type="checkbox"
                    name="tos"
                    checked={values.tos}
                    onChange={onChange}
                    />
                    </label>
                    </div>

                    </div>



        </form>
    )

}