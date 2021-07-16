import React, { useState } from 'react'

function Form() {
	return (
		<form>
			<label htmlFor="name">Name:
				<input
					type="text"
					name="name"
					id="name"
					value="" />
			</label>

			<label htmlFor="email">Email
				<input
					type="email"
					name="email"
					id="email"
					value="" />
			</label>

			<label htmlFor="password">Password
				<input
					type="password"
					name="password"
					id="password"
					value="" />
			</label>

			<label htmlFor="terms" className="terms">
				<input
					type="checkbox"
					name="terms"
					id="terms"
					checked="" />
					Terms of Service
			</label>
			<button type="submit">Submit</button>
			
		</form>
	)
}





export default Form