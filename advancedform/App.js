import Form from './Form'

import * as yup from 'yup'


const initialFormValues = {
    myName:'',
    myEmail:'',
    myPassword:'',

}
const initialFormErrors = {

}
const initialUsers = []
const initialDisabled = true

export default function App(){
    const [formValues, setFormValues] = useState(initialFormValues)

    return (
        Form()
    )
}