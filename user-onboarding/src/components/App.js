import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import TeamMemberForm from './TeamMemberForm';
import TeamMember from '../components/TeamMember';

import axios from 'axios';
import * as yup from 'yup';
import schema from '../validation/formSchema';

// initial values
const initialFormValues = {
	//general info
	name: '',
	username: '',
	email: '',
	password: '',
	//department info
	department: '',
	team: '',
	supervisor: '',
	location: '',
	//policies
	terms: false,
	privacy: false,
	gum: false,
};

const initialFormErrors = {
	//general info
	name: '',
	username: '',
	email: '',
	password: '',
	//department info
	department: '',
	team: '',
	supervisor: '',
	location: '',
	//policies
	// terms: false,
	// privacy: false
};

const initialTeamMembers = [];
const initialDisabled = true;

export default function App() {
	// states
	const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	// helpers
	const getTeamMembers = () => {
		axios
			.get(`https://reqres.in/api/users`)
			.then((res) => {
        console.log('res.data', res.data)
        console.log('res.data.data', res.data.data)
				setTeamMembers(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const postNewTeamMember = (newTeamMember) => {
		axios
			.post('https://reqres.in/api/users', newTeamMember)
			.then((res) => {
				setTeamMembers([res.data, ...teamMembers]);
				setFormValues(initialFormValues);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const inputChange = (name, value) => {
		yup
			.reach(schema, name)
			.validate(value)
			.then(() => {
				setFormErrors({
					...formErrors,
					[name]: '',
				});
			})
			.catch((err) => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});

		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const formSubmit = () => {
		const newTeamMember = {
			//general info
			name: formValues.name.trim(),
			username: formValues.username.trim(),
			email: formValues.email.trim(),
			password: formValues.password,
			//department info
			department: formValues.department,
			team: formValues.team,
			supervisor: formValues.supervisor.trim(),
			location: formValues.location,
			//policies
			terms: formValues.terms,
			privacy: formValues.privacy,
      gum: formValues.gum,
		};
    console.log(newTeamMember)
		postNewTeamMember(newTeamMember);
	};

	// side effects
	useEffect(() => {
		getTeamMembers();
	}, []);

	useEffect(() => {
		schema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);

	return (
		<div className='App'>
			<header>
				<h1>grell.io Onboarding</h1>
				<p>
					Welcome. Please fill out the below information to add a new team
					member.
				</p>
			</header>

			<TeamMemberForm
				values={formValues}
				change={inputChange}
				submit={formSubmit}
				disabled={disabled}
				errors={formErrors}
			/>

			{/* <TeamMember details={teamMembers[0]}/> */}
			{/* {console.log(teamMembers.data)} */}

			{teamMembers.map((member) => {
				return <TeamMember details={member} />;
			})}
		</div>
	);
}
