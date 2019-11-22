import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";
import axios from "axios";

const Login = ({status}) => {

    const [user, setUser] = useState([]);

    useEffect(() =>{
        if (status) {
            setUser([...user, status])
        }
    }, [status]);

   
    return(
        <div className="loginForm">
            <h1>Welcome Back, Returning User</h1>
            <Form>
                <Field type="username" name="username" placeholder="username" />
                
                <Field type="password" name="password" placeholder="password" />
                           
                <button type="submit">Login</button>  
            </Form>
            {user.map(person => (
                <ul key={person.id}>
                    <li>Username: {person.username}</li>
                    <li>Password: {"●".repeat(person.password.length)}</li>
                </ul>
            ))}
            </div>

    )}
const FormikLogin = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || "",
            password: password || "",
            
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
})(Login)




export default FormikLogin;