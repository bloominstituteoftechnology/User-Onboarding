import React from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log("hello");

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" name="Name" ref={register({required: true, max: 80, min: 2, maxLength: 80})} />

            <input 
                type="email" placeholder="Email" name="Email" ref={
                    register({required: true, max: 50, min: 6, 
                        pattern: {   
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/i,
                            message: "invalid email address"
                        } 
                    })} 
            />

            <input type="password" placeholder="Password" name="Password" ref={register({required: true, min: 6, maxLength: 12})} />

            <input type="checkbox" placeholder="Terms of Service (Click to Agree)" name="Terms of Service (Click to Agree)" ref={register({required: true})} />

            <input type="submit" />
        </form>
    )
}

export default Form
