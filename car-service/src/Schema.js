import * as yup from 'yup'

export default yup.object().shape({
    first_name: yup
        .string()
        .required('First Name is required'),

    last_name: yup
        .string()
        .required('Last Name is required'),

    year: yup
        .string()
        .required('Year of vehicle is required'),

    make: yup
        .string()
        .required('Make of vehicle is required'),

    modle: yup
        .string()
        .required('Modle of vehicle is required'),

    service: yup
        .string()
        .oneOf(['Oil Change', 'Alignment', 'Tire Rotation', 'Fluid Flush', 'Saftey Inspection']),

    terms: yup.string().required('Please accept terms of service'),
})