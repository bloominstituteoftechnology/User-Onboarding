import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Form from './form'
import schema from './validation/formSchema'
import { reach } from 'yup'
import User from './user'
const initialFormValues = {
	///// TEXT INPUTS /////
	name: '',
	email: '',
	password: '',
	ToS: false,
}
const initialFormErrors = {
	name: '',
	email: '',
	password: '',
	Tos: '',
}

const initialDisabled = true
const initialUsers = []

const App = props => {
	const [formValues, setFormValues] = useState(initialFormValues)
	const [disabled, setDisabled] = useState(initialDisabled)
	const [formErrors, setFormErrors] = useState(initialFormErrors) // object

	const [users, setUsers] = useState(initialUsers)
	// console.log('users', users)

	const postNewFriend = newFriend => {
		// 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
		//    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
		//    and regardless of success or failure, the form should reset
		axios
			.post('https://reqres.in/api/users', newFriend)
			.then(res => {
				// console.log('theres', res.data)
				setUsers([res.data, ...users])
			})
			.catch(err => {
				console.log(err)
			})
			.finally(() => {
				setFormValues(initialFormValues)
			})
	}

	const validate = (name, value) => {
		reach(schema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: '' }))
			.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
	}

	const inputChange = (name, value) => {
		// 🔥 STEP 10- RUN VALIDATION WITH YUP
		validate(name, value)

		setFormValues({
			...formValues,
			[name]: value, // NOT AN ARRAY
		})
	}
	// const getUsers = () => {
	// 	// 🔥 STEP 5- IMPLEMENT! ON SUCCESS PUT FRIENDS IN STATE
	// 	//    helper to [GET] all friends from `http://buddies.com/api/friends`
	// 	axios
	// 		.get('https://reqres.in/api/users')
	// 		.then(res => {
	// 			console.log(res.data)
	// 			setUsers(res.data)
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
	// }
	// useEffect(() => {
	// 	getUsers()
	// }, [])

	useEffect(() => {
		// 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
		schema.isValid(formValues).then(valid => setDisabled(!valid))
	}, [formValues])

	const formSubmit = () => {
		const newUser = {
			name: formValues.name.trim(),
			email: formValues.email.trim(),
			password: formValues.password.trim(),
			ToS: formValues.ToS,
			// 🔥 STEP 7- WHAT ABOUT HOBBIES?
			// hobbies: ['hiking', 'reading', 'coding'].filter(hob => formValues[hob])
		}
		postNewFriend(newUser)

		console.log('newuser', newUser)
	}

	return (
		<div className='App'>
			<p>app</p>
			<Form
				values={formValues}
				change={inputChange}
				submit={formSubmit}
				disabled={disabled}
				errors={formErrors}
			/>

			{users.map(user => {
				return <User key={user.id} details={user} />
			})}
		</div>
	)
}

export default App
