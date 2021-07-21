import React from 'react'

export default function OnboardingForm(props) {
const {
    values, 
    submit,
    change,
    disabled,
    errors,
} = props

const onChange = evt => {
    evt.preventDefault()
    submit()
}
}