import * as yup from 'yup'

export default yup.object().shape({
name: yup
.string()
.required('A name is required.')
.min(4, 'A name with at least 4 characters is required.'),
email: yup
.string()
.required('A valid email is required.'),
password: yup
.string()
.required('A password is required.'),
terms: yup
.boolean(),
});
