import React, { useState } from "react";
import Form from "./componets/Form";
const initialFormValues = {
	///// TEXT INPUTS /////
	username: "",
	email: "",
	password: "",

	///// DROPDOWN /////
	role: "",
};
function App() {
	const [friends, setFriends] = useState([]);

	const [formValues, setFormValues] = useState(initialFormValues);

	const updateForm = (inputName, inputValue) => {
		// 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
		//  It takes in the name of an input and its value, and updates `formValues`
		setFormValues({ ...formValues, [inputName]: inputValue });
	};
	return (
		<div>
			<Form values={formValues} update={updateForm} submit={} />
		</div>
	);
}

export default App;
