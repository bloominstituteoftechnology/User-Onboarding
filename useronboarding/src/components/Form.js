import React, { useState, useEffect } from 'react'
import { Form as Formik, Field, withFormik } from 'formik'
import { Segment, Form, Checkbox, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Axios from 'axios';
import CardContent from './Card'

const FormComp = ({ status }) => {
    const [user, setUser] = useState([])
    //console.log(status)
    useEffect(() => {
        // status sometimes comes through as undefined
        if (status) {
            setUser([...user, status])
        }
    }, [status]);
    user.map(e => <CardContent data={e} />)
    return (
        <Segment raised compact>
            <Form>
                <Formik>
                    <Form.Field>
                        <Field type="text" name="name" placeholder="Name" />
                    </Form.Field>
                    <Form.Field>
                        <Field type="email" name="email" placeholder="Email" />
                    </Form.Field>
                    <Form.Field>
                        <Field type="password" name="password" placeholder="Password" />
                    </Form.Field>
                    <Form.Field>
                        <label>Do you agree to sign your life away?</label>
                        <Field type="checkbox" name="checkbox" />
                    </Form.Field>
                    <button type="submit">Submit</button>
                    {user.map(e => <CardContent data={e} />)}
                </Formik>
            </Form>
        </Segment>
    )
}
const FormikForm = withFormik({

    mapPropsToValues(values) {
        return {
            name: values.name || '',
            email: values.email || '',
            password: values.password || '',
            checkbox: values.checkbox
        }
    },
    handleSubmit(values, { setStatus }) {

        Axios.post('https://reqres.in/api/users/', values)
            .then(res => setStatus(res.data))
    }
})(FormComp);

export default FormikForm;