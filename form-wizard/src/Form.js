import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";

export default function Form(props) {
  const { values, submit, change, errors, disabled } = props;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <TextField
        className="textField"
        id="outlined-basic"
        name="name"
        label="Name"
        value={values.name}
        onChange={handleChange}
        maxLength="100"
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-basic"
        name="email"
        className="textField"
        type="email"
        value={values.email}
        onChange={handleChange}
        maxLength="100"
        label="Email"
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-basic"
        name="password"
        className="textField"
        type="password"
        value={values.password}
        onChange={handleChange}
        maxLength="40"
        label="Password"
        variant="outlined"
        size="small"
      />
      <label>
        <Checkbox
          checked={values.terms}
          onChange={handleChange}
          name="terms"
          color="primary"
        />
        I understand and agree to the terms and conditions
      </label>

      <div className="container">
        <Button
          type="submit"
          className="submit"
          value="submit"
          disabled={disabled}
          variant="contained"
          color="primary"
          size="small"
          endIcon={<Icon>send</Icon>}
        >
          submit
        </Button>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>
    </form>
  );
}
