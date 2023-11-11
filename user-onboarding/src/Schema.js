import * as yup from 'yup'

const schema = yup.object().shape({
    first_name: yup
    .string()
    .required('Lirst name is reqired mate')
    .min(4, 'HAHA JOE, YOURE OUT OF LUCK TODAY'),

    last_name: yup
    .string()
    .required('Last name is required matey')
    .min(3, 'If your last name is JOE thats fine'),

    email: yup
    .string()
    .email('Fill out correctly mate')
    .required('We need this, come on hurry up'),

    password: yup
    .string()
    .required('Please enter a password')
    .min(8, 'must contain 8 characters sucka'),

    tos: yup
    .boolean()
    .required('The terms and conditions must be accepted')
    .oneOf([true], 'The terms and conditions must be accepted'),

    career: yup
    .string()
    .required('pick a career')
    .oneOf(['cop', 'fireman', 'marine'], ' pick a role kid')
})

   

export default schema