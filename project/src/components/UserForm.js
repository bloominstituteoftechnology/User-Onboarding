import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const UserForm = (props) => {

    const { disabled, values, submit, change, error} = props;

    const submitHandler = e => {
        e.preventDefault()
        submit()
    }

    const changeHandler = e => {
        const { name, value, checked, type } = e.target;

        const valueToUse = type === 'checkbox' ? checked : value;

        change(name, valueToUse);
    }

    return(
        <Container>
            <h2>Create Account:</h2>
            <Form className='form' onSubmit={submitHandler}>
                <Form.Group controlId='formName'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter username'
                        value={values.username}
                        name='username'
                        onChange={changeHandler} 
                        />
                    <Form.Text className='text-muted'>
                        {error.username}
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='name@example.com' 
                        value={values.email}
                        name='email'
                        onChange={changeHandler}
                        />
                    <Form.Text className='text-muted'>
                        {error.email}
                        <p>your privacy is important to us, we will not share your email with anyone</p>
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Password' 
                        value={values.password}
                        name='password'
                        onChange={changeHandler}
                        />
                    <Form.Text className='text-muted'>
                        password must contain at least 8 characters and include at least one uppercase character, one number, and one symbol
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId='formConfirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Confirm Password' 
                        value={values.confirmPassword}
                        name='confirmPassword'
                        onChange={changeHandler}
                        />
                    <Form.Text className='text-muted'>
                        {error.confirmPassword}
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId='formTOS'>
                    <Form.Check 
                        type='checkbox' 
                        label='I have read and agree to the Terms of Service' 
                        checked={values.tos}
                        name='tos'
                        onChange={changeHandler}
                        />
                    <Form.Text className='text-muted'>
                        {error.tos}
                        <div>
                            <a href='#'>Terms of Service</a>
                        </div>
                    </Form.Text>
                </Form.Group>
                <Button disabled={disabled} variant='primary' type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default UserForm;

//create modal to pop-up to display any rendered error messages