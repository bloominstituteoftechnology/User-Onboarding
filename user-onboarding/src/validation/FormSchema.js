import * as yup from "yup";

const formSchema = yup.object().shape({
	username: yup
		.string()
		.trim()
		.required("* Should be a valid last name!!")
		.min(4, "* Username must be at least 4 characters long!"),
	email: yup
		.string()
		.email("* Should be a valid email address!!")
		.required("* Email is required!"),
	password: yup
		.string()
		.required("* Should be a valid password!!")
		.min(4, "* Password must be at least 4 characters long!!"),
	tos: yup
		.boolean()
		.required("* You must agree to the Terms of Service!!")
		.oneOf([true], "* You must agree to the Terms of Service!!"),
});

export default formSchema;