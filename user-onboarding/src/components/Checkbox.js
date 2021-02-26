import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

const Checkbox = (props) => {
    const { name, label, checked, handleChange } = props

    const onChange = (evt) => {
        const { name, checked } = evt.target
        console.log(checked)
        handleChange(name, checked)
    }

    return (
        <FormGroup check>
            <Input type="checkbox" value={checked}  name={name} onChange={onChange} />{' '}
            <Label htmlFor={name} check>
              {label}
            </Label>
            {' '}
        </FormGroup>
    )
}

export default Checkbox