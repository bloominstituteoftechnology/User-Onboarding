import * as yup from 'yup'

const formSchema = yup.object().shape({
	name: yup.string().trim().required('name is required').min(3, 'name must be 3 characters long'),
	email: yup.string().email('Must be a valid email address').required('Email is required'),
	password: yup
		.string()
		.trim()
		.required('password is required')
		.min(3, 'password must be 3 characters long'),

	ToS: yup.boolean().isTrue('please accept the terms of service'),
})

export default formSchema
