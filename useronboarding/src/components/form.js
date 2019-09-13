import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import './form.css';


function Forms({touched,errors,status}) {
    const [user, setUser] = useState([])
    useEffect(()=>{
        if(status){
            setUser([...user,status])
        }
    },[status])

  return (
    <Form>
        <div className="flexBox">
            <h1>User OnBoarding</h1>
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field className="marginField" type="text" name="name" placeholder="name"/>
        {touched.email && errors.email && <p className="error">{errors.email}</p>}
        <Field className="marginField" type="email" name="email" placeholder="email"/>
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        <Field  className="marginField" type="password" name="password" placeholder="password"/>
        <label className="marginField">
            {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
            <Field type="checkbox" name="tos"/>
            Terms of Service
        </label>
        <button className="subButton" className="marginField" type="submit">Submit</button>
        </div>
        {user.map(users=>(
            <div key={users.id}>
            <div>Name: {users.name}</div>
            <div>Email: {users.email}</div>
            <div>Password: {users.password}</div>
            <div> Did they Accept the TOS?: {users.tos.toString()}</div>
            </div>
        ))}
    </Form>
  );
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
          name: values.name || '',
          email: values.email || '',
          password: values.password || '',
          tos: values.tos || false
        }
      },
      validationSchema: yup.object().shape({
        name: yup.string().required('Name is Required!'),
        email: yup.string().required('Email Is Required!'),
        password: yup.string().required('Password is Required!'),
        tos: yup.boolean().oneOf([true],'Must Select Terms Of Service!')
      }),
      handleSubmit:(values, {setStatus})=>{
        Axios.post('https://reqres.in/api/animals', values)
        .then((res)=>{
          setStatus(res.data)
        })
        .catch((error)=>{
          console.log(error)
        })
      }
})(Forms);
