import * as yup from 'yup';

const formSchema = yup.object().shape({
	first_name: yup
		.string()
		.trim()
		.required('First name is required!')
		.min(3, 'Username must be three letters long!'),
	last_name: yup
		.string()
		.trim()
		.required('Last name is required!')
		.min(2, 'Last name must be longer than '),
	email: yup
		.string()
		.email()
		.required('You gotta have an email... this is just sad')
})