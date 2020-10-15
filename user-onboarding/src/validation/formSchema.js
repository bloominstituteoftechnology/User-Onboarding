import * as yup from 'yup';

export default yup.object().shape({
	// general info
	name: yup.string().required('Please add a name.'),
	username: yup
		.string()
		.min(2, 'Please make sure username is at least one character.')
		.required('Please add a username.'),
	email: yup
		.string()
		.email('Please make sure email is formatted properly.')
		.required('Please add an email.'),
	password: yup
		.string()
		.min(8, 'Please make sure password is at least eight characters.')
		// .matches(
		// 	/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/,
		// 	'Please make sure password contains at least one uppercase, one lowercase, one number, and one special character.'
		// )
		.required('Please add a password.'),
	// department info
	department: yup
		.string()
		.oneOf(['engineering', 'marketing', 'finance'], 'Please add a department'),
	team: yup
		.string()
		.oneOf(
			[
				'ios',
				'web',
				'international-sales',
				'influencer-partnerships',
				'venture-capital',
			],
			'Please add a team'
		),
	supervisor: yup.string().required('Please add a supervisor.'),
    location: yup
		.string()
		.oneOf(
			[
				'los-angeles',
				'austin',
				'chicago',
				'boston',
				'london',
			],
			'Please add a location'
        ),
    terms: yup.boolean().required('Please accept the Terms of Service.'),
    privacy: yup.boolean().required('Please accept the Privacy Policy.'),
	gum: yup.boolean()
});
