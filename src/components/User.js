import React from 'react';

function User({ details }){
	if(!details){
		return <h3>Fetching the trash...</h3>
	}

	return (
		<h2>{details.first_name} {details.last_name}</h2>
	);
}

export default User;
