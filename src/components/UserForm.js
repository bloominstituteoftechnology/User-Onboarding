import React, {useState, useEffect} from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function UserForm({values, touched, errors, status}) {
    const [user, setUser] = useState([])
    useEffect(() => {
        status && setUser(user => [...user, status])
      },[status])
    return (
        <div>
            <Form>
                <Field type="text" name="name" placeholder="name"/>
                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                <Field type="text" name="email" placeholder="email"/>
                <Field type="text" name="password" placeholder="password"/>
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
                <Field component="select" name="role" >
                    <option>Choose Ya Role</option>
                    <option value="Driver">Driver</option>
                    <option value="Designer">Designer</option>
                    <option value="LunchBox">LunchBox</option>
                    <option value="PicklePerson">PicklePerson</option>
                    <option value="FastMouth">FastMouth</option>
                </Field>
                <Field
                    component="textarea"
                    type="text"
                    name="quote"
                    placeholder="quote"
                    />
                <label>
                    Terms of Service
                    <Field type="checkbox" 
                    name="termsOfService" 
                    checked={values.termsOfService} 
                    />
                    {touched.termsOfService && errors.termsOfService && <p className="error">{errors.termsOfService}</p>}
                </label>
                <button type="submit">Submit!</button>
            </Form>
            {user.map(individ => (
        <ul key={individ.id}>
          <li>Name:  {individ.name}</li>
          <li>email:  {individ.email}</li>
          <li>role:  {individ.role}</li>
          <li>wisdom:  {individ.quote}</li>
        </ul>
        ))}
        </div>
    )
}

const FormikUserForm = withFormik ({
    mapPropsToValues({name, email, password, quote, termsOfService }){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            quote: quote || "",
            termsOfService: termsOfService || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please enter name"),
        password: Yup.string().required("No Open Sesame, No pass Go, Please Enter your password!"),
        termsOfService: Yup.boolean().oneOf([true], 'Agree...to move to the next step'),
    }),
    handleSubmit(values, {setStatus, resetForm}) { 
        axios.post('https://reqres.in/api/users', values) 
              .then(response => { 
                  console.log(response)
                  setStatus(response.data); 
                  resetForm()
                }) 
              .catch(err => console.log(err.response));
        }
})(UserForm);
export default FormikUserForm;
