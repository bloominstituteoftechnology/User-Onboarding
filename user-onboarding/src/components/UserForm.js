import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'

const UserForm = ({errors, touched, values, status}) => {
        
        const [users, setUsers] = useState([]);
        console.log(users)

        useEffect(() => {
            if (status) {
                setUsers([...users, status]);
            }
        }, [status]);

        return(
            <div className= 'onboardin-form'>
                <h1 className= 'onboarding-title'>Onboarding</h1>
                <Form>
                    <Field  className= 'nameField'
                            type= 'text' 
                            name= 'name'
                            placeholder= 'Name'
                    />
                    {touched.name && errors.name && (
                        <p className='error'>{errors.name}</p>
                    )}
                    
                    <Field  className= 'emailField'
                            type= 'text' 
                            name= 'email'
                            placeholder = 'Email'
                    />
                    {touched.email && errors.email && (
                        <p className='error'>{errors.email}</p>
                    )}
                    <Field  className= 'passwordField'
                            type= 'password' 
                            name= 'password'
                            placeholder = 'Password'
                    />
                    {touched.password && errors.password && (
                        <p className='error'>{errors.password}</p>
                    )}
                    
                    <label className='conditions-container'>
                        Terms and Conditions
                        <Field  type= 'checkbox' 
                                name= 'conditions'
                                placeholder = 'Terms and Conditions'
                                checked={values.conditions}
                        />
                    <span className='checkmark'/>
                    </label>

                    <button className= 'submitButton'type='submit'>Submit</button>
                </Form>

                {users.map(user => (
                    <p key={user.id}>{user.name}</p>
                ))}
            </div>
        )
    }     

    const FormikUserForm = withFormik({
        mapPropsToValues({ name, email, password, conditions}) {
            return {
                name: name || '',
                email: email || '',
                password: password || '',
                conditions: conditions || true
            };
        },

        validationSchema: Yup.object().shape({
                name: Yup.string().required('Must enter a name'),
                email: Yup.string().required('Must enter an email'),
                password: Yup.string().required('Must enter a password'),
        }),

        handleSubmit(values, {setStatus}) {
            axios
                .post('https://reqres.in/api/users/', values)
                .then(response => {
                    console.log(response)   
                    setStatus(response.data);
                })
                .catch(error => console.log(error.response));
        }
    })(UserForm);

export default FormikUserForm;

// - Name
// - Email
// - Password
// - Terms of Service (checkbox)
// - A Submit button to send our form data to the server.