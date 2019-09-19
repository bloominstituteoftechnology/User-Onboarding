import React, {useState, useEffect} from 'react'
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios'

function Forms ({values, errors, touched, status}){

     const [users, setUsers] = useState([]);
     useEffect( () => {
          if(status) {
               setUsers([...users, status])
          }
     },[status])

     return(
          <div>
               <Form>
                    <Field type="text" name="name" placeholder="Name" />
                    {touched.name && errors.name && (<p>{errors.name}</p>)}

                    <Field type="email" name="email" placeholder="Email" />
                    {touched.email && errors.email && (<p>{errors.email}</p>)}
                    
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}

                    <label> Terms of Service: 
                    <Field type="checkbox" name="termsOfService" checked={values.termsOfService} />
                    </label>
               

               <button>Submit</button>
               </Form>

               {
                    users.map(item => {
                         return (<ul key={item.id}>
                              <li>Name: {item.name}</li>
                              <li>Email: {item.email}</li>
                         </ul>
                         )
                    })
               }
          </div>
     )
}

const FormikForms = withFormik({
     mapPropsToValues({name, email, password, termsOfService}){
          return{
               name: name || '',
               email: email || '',
               password: password || '',
               termsOfService: termsOfService || false
          }
     },

     validationSchema: Yup.object().shape({
          name: Yup.string().required("You must provide your name"),
          email: Yup.string().required("You must provide an email"),
          password: Yup.string().required("You must provide your password")
     }),
     handleSubmit(values, {setStatus}){
          axios.post('https://reqres.in/api/users', values)
          .then(response => {
               setStatus(response.data)
               console.log(response)
          })
          .catch(error => {
               console.log(error.response)
          })
     }




})(Forms)
console.log(FormikForms)

export default FormikForms