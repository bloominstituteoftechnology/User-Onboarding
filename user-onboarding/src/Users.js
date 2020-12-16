import React from 'react'

const Users = props => {
  return (
    <>
      <header>
        <h2>Users</h2>
      </header>
      <div className="user-list">
        {props.users.map(user => (
          <p className="user" key={user.id}>
            <h3>Name: {user.user}</h3>
            <h4>Email: {user.email}</h4>
            <h4>Role: {user.role}</h4>
            <h4>Agreed to ToS? {user.tos ? "Yes" : "No"}</h4>
          </p>
        ))}
      </div>
    </>
  )
}

export default Users