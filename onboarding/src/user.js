const User = ({ details }) => {
	return (
		<div>
			<p>{details.id}</p>
			<p>{details.createdAt}</p>
			<p>{details.name}</p>
			<p>{details.email}</p>
		</div>
	)
}

export default User
