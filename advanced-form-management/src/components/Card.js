import React from 'react';

export default function Card(props) {

  const { data } = props;

  const { name, email, password, role, id } = data;

  return (
    <div className='member container'>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  )

}
