import React from 'react'
import Form from './Form'

export default function Users(props) {
  const { details } = props

  if (!details) {
    return <h3>fetching your details...</h3>
  }

  return (
    <div className='user card'>
      <h2>{props.formState.name}</h2>
      <p>Email: {props.formState.email}</p>
      <p>Role: {props.formState.favMmo}</p>
    </div>
  )
}