import { useState } from "react";
import * as yup from "yup";

const initialState = {name: '', email: '', password: '', tos: false}
const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email('You\'ve failed to supply a proper email address'),
    password: yup.string().required('You kinda need this bud.'),
    tos: yup.bool('I don\'t know what you did, or how you did it. But ToS is not a bool anymore.'),
})

const Form = (props) => {
    const {setUsers, users} = props;
    const [user, setUser] = useState(initialState)
    const [errMessages, setErrMessages] = useState([]);

    const handleEv = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    const toggleToS = () => {
        setUser(user => {
            return {...user, tos: !user.tos}
        })
    }

    return (
        <form className="newUserForm">
            <label>
                Name:
                <input onChange={handleEv} value={user.name} name='name'></input>
            </label>
            <br/>
            <label>
                EMail:
                <input onChange={handleEv} value={user.email} name='email'></input>
            </label>
            <br/>
            <label>
                Password:
                <input onChange={handleEv} value={user.password} name='password'></input>
            </label>
            <br/>
            <label>
                I agree to the Terms of Serivce: 
                <input onChange={toggleToS} type='checkbox' checked={user.tos} name='tos'></input>
            </label>
            <br/>
            <button onClick={ev => {
                ev.preventDefault();
                userSchema.validate(user)
                .catch(err => {setErrMessages(err.errors)})
                .then(res => {
                    console.log(res);
                })
                setUsers([...users, user])
            }}>Add User!</button>
            <p className="errors">{errMessages.map(msg => {
                return (<div className='errorMessage'>{msg}</div>)
            })}</p>
        </form>
    )
}
export default Form