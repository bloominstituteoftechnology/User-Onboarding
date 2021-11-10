import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Tell me your name or die')
        .min(15, "I don't like names longer than fifteen letters"),

    email: yup
        .string()
        .trim()
        .required('Give your email so we can sell it to Facebook'),

    tos: yup
    .boolean()
    .required('Let us sell your data'),
})

export default formSchema;