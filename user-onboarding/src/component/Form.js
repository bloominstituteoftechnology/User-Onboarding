import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EmployeeForm = ({values, errors, touched, status}) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        status && setEmployees(employees => [...employees, status]);
    }, [status]);

    return (
        <div>
            <Form>
                <Field type='text' name='employeeName' placeholder='Enter Name'></Field>
                {touched.employeeName && errors.employeeName && (<p>{errors.employeeName}</p>)}
                <Field type='text' name='employeeEmail' placeholder='Enter Email'></Field>
                {touched.employeeEmail && errors.employeeEmail && (<p>{errors.employeeEmail}</p>)}
                <Field type='text' name='employeePassword' placeholder='Enter Password'></Field>
                {touched.employeePassword && errors.employeePassword && (<p>{errors.employeePassword}</p>)}
                <label>Accept Terms of Service
                <Field type='checkbox' name='terms' checked={values.terms}></Field>
                {errors.terms && (<p>{errors.terms}</p>)}
                </label>
                <button>Submit</button>
            </Form>
            {employees.map(employee => (
                <ul key= {employee.id}>
                    <li>Name: {employee.employeeName}</li>
                    <li>Email: {employee.employeeEmail}</li>
                    <li>Password: {employee.employeePassword}</li>
                </ul>
            ))}
        </div>
    )
}
const FormikEmployeeForm = withFormik({
    mapPropsToValues({employeeName, employeeEmail, employeePassword, terms}) {
        return {
            employeeName: employeeName || '',
            employeeEmail: employeeEmail || '',
            employeePassword: employeePassword || '',
            terms: terms || false 
        };
    },
    validationSchema: Yup.object().shape({
        employeeName: Yup.string().required('It puts it\'s name in the box').matches(/^\p{L}+$/u, 'It puts a REAL name in the box'),
        employeeEmail: Yup.string().required('It puts it\'s email in the box').email('It puts a REAL email in the box'),
        employeePassword: Yup.string().required('It puts it\'s password in the box').min(8, `It\'s password must be at least 8 characters`),
        terms: Yup.bool().oneOf([true], 'It must agree to our terms')
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        axios
        .post('https://reqres.in/api/users', values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.res))
        .finally(() =>{
            resetForm({})
        })
    }
})(EmployeeForm);
export default FormikEmployeeForm