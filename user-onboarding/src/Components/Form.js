import {useState} from 'react'
import * as yup from 'yup'
import axios from 'axios'

export default function Form(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState(false)
    const [formError, setFormError] = useState([])
    let schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(6),
        checked: yup.boolean().required("Please accept TOS").oneOf([true], "Please accept TOS"),
    })
    const handleSubmit = () => {
        schema.validate({name, email, password, checked}).then(valid => {
        createUser()
        }).catch(valid => {
            setFormError(valid.errors)
        })
    }
    const createUser = () => {
        axios.post("https://reqres.in/api/users", {name, email, password})
            .then(res => {
                console.log(res.data)
                setFormError([])
                props.setUsers([...props.Users, res.data])
        })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <form>
            <input 
                name='name'
                type='text'
                placeholder='Name'
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                name='email'
                type='text'
                placeholder='Email'
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                name='password'
                type='text'
                placeholder='Password'
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <input 
                name= 'TOS'
                type='checkbox'
                checked= {checked}
                onChange= {(e) => {
                    setChecked(e.target.checked)
                }}
            />
            <button type="submit" onClick={e => {
                    e.preventDefault()
                    handleSubmit()
                }}>Submit</button>
            {formError.map(err => {
                return <p className='formError'>{err}</p>
            })}
            
        </form>
    )
}