import React from "react";
import styled from "styled-components";

function Form() {
	return (
		<FormDiv>
			<FormInfo>
				<h1>Welcome Back to Random Site Uno</h1>
				<InputInfoDiv>
					<InputInfo
						type="text"
						value="Username"
						onChange={onchange}
					></InputInfo>
					<InputInfo type="email" value="Email" onChange={onchange}></InputInfo>
					<InputInfo
						type="text"
						value="Password"
						onChange={onchange}
					></InputInfo>
				</InputInfoDiv>
				<TermsOfServiceDiv>
					<p> Terms of Service</p>
					<InputInfo type="radio" onChange={onchange}></InputInfo>
				</TermsOfServiceDiv>
				<div>
					<button>Submit</button>
				</div>
			</FormInfo>
		</FormDiv>
	);
}
const FormDiv = styled.div`
	width: 40vw;
	height: 60vh;
	border: solid 3px black;
	margin: 5rem auto;
	text-align: center;
`;
const FormInfo = styled.div`
	width: 30vw;
	height: 50vh;
	margin: 5rem auto;

	border: solid 3px red;
	align: center;
	text-align: center;
	padding: 0 1rem;
`;
const InputInfoDiv = styled.div`
	// border: solid 3px blue;
`;
const TermsOfServiceDiv = styled.div`
	// border: solid 3px green;
`;

const InputInfo = styled.input`
	text-align: center;
	padding: 1rem;
	margin: 2rem auto;
`;
export default Form;
