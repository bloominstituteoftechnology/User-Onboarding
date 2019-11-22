import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";
import axios from "axios";



const NewUser = ({values, errors, touched, status}) => {

    const [user, setUser] = useState([]);

    useEffect(() =>{
        if (status) {
            setUser([...user, status])
        }
    }, [status]);

    return(
        <div className="newUserForm">

            <Form>
                <Field type="text" name="name" placeholder="Name" />
                {touched.name && errors.name && (<p className="error">{errors.name}</p>)}

                <Field type="email" name="email" placeholder="Email" />
                {touched.email && errors.email && (<p className="error">{errors.email}</p>)}

                <Field type="password" name="password" placeholder="●●●●●●●●" />
                {touched.password && errors.password && (<p className="error">{errors.password}</p>)}

                <label>Agree to Terms of Services: <Field type="checkbox" name="terms" checked={values.terms} /></label>
                {touched.terms && errors.terms && (<p className="error">{errors.terms}</p>)}
                <button>Submit</button>  
            </Form>
            {/* Prints user info after submission */}
            {user.map(person => (
                <ul key={person.id}>
                    <li>Username: {person.name}</li>
                    <li>Email: {person.email}</li>
                    <li>Password: {"●".repeat(person.password.length)}</li>
                </ul>
            ))}
        </div>

    )}
const FormikNewUser = withFormik({
    mapPropsToValues({name, email, password, terms}){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    },

    handleSubmit(values, {setStatus}){
        axios
            .post("https://reqres.in/api/users/", values)
            .then(response =>{
                console.log(response);
                setStatus(response.data);
            })
            .catch(error => console.log(error.response));
    }
})(NewUser)




export default FormikNewUser; 