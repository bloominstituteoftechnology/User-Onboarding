import * as yup from "yup";

export default yup.object().shape({
	username: yup
		.string()
		.required("* Should be a valid last name.")
		.min(2, "* Username must be at least 2 characters long"),
	email: yup
		.string()
		.email("* Should be a valid email address.")
		.required("* Email is required"),
	password: yup
		.string()
		.required("* Should be a valid password.")
		.min(8, "* Password must be at least 8 characters long"),
	terms: yup
		.boolean()
		.required("* You must agree to the Terms of Service")
		.oneOf([true], "* You must agree to the Terms of Service"),
});