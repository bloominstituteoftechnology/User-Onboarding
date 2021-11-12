import React from 'react';

function User({ details }){
	if(!details){
		return <h3>Fetching the trash...</h3>
	}

	return (
		<div>
			<h2>{details.first_name} {details.last_name}</h2>
			<p>Email: {details.email}</p>
			<p>Password: [Wow, chill bucko]</p>
			<p>Did we take all of your information? {details.termsOfService ? 'Yes' : 'No'}</p>
		</div>
	);
}

export default User;
