import * as yup from 'yup';

const formSchema = yup.object().shape({ first_name: yup.string().trim().required('username is reguired on form').min(2, 'username must be 2 or more characters long.Please re-enter '),//must out comma they are key value pairs
last_name: yup.string().trim().required('username is reguired on form').min(2, 'username must be 2 or more characters long.Please re-enter '),
email: yup.string().email('must be a valid email address').required('email is reguired'),
terms: yup.boolean().oneOf([true],'Please read your service terms'),

});


export default formSchema;