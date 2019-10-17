import React, {useState} from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function UserForm({values, touched, errors}) {
    // const [user, setUser] = useState([])
    return (
        <div>
            <Form>
                <Field type="text" name="name" placeholder="name"/>
                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                <Field type="text" name="email" placeholder="email"/>
                <Field type="text" name="password" placeholder="password"/>
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
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
        </div>
    )
}

const FormikUserForm = withFormik ({
    mapPropsToValues({name, email, password, termsOfService }){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            termsOfService: termsOfService || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please enter name"),
        password: Yup.string().required("No Open Sesame, No pass Go, Please Enter your password!"),
        termsOfService: Yup.boolean().oneOf([true], 'Agree...to move to the next step'),
    }),
    handleSubmit(values, {setStatus}) { 
        axios.post('https://reqres.in/api/users', values) 
              .then(response => { 
                  console.log(response)
                //   setStatus(res.data); 
                }) 
              .catch(err => console.log(err.response));
        }
})(UserForm);
export default FormikUserForm;
