import React from "react"

export default function TonyForm(props){
  const {values, submit, change, disabled, errors} = props
  
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const {name, value, type, checked} = evt.target //this show the changes
  }
}