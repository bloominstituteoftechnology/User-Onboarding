import * as yup from 'yup';

const formSchema = yup.object().shape({
	first_name: yup
		.string()
		.trim()
		.required('First name is required!')
		.min(1, 'Too Short! Get a new name!'),
	last_name: yup
		.string()
		.trim()
		.required('Last name is required!')
		.min(2, 'Last name must be longer than '),
	email: yup
		.string()
		.email()
		.required('Must be a valid email address'),
	password: yup
		.string()
		.required('Password is required, secuirty yo.'),
	termsOfService: yup.boolean().oneOf([true], 'Please give us all of your personal information'),
})

export default formSchema;