// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
	name: yup.string().required("pls enter your name"),
	email: yup.string().email().required("pls enter your email"),
	password: yup.string().required("pls set a password"),
	tos: yup.boolean().required(),
});
