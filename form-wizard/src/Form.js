import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

export default function Form(props) {
  const {} = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    change(name, value);
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
        type="text"
        value={values.name}
        onChange={handleChange}
        maxLength="100"
        variant="outlined"
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
      />
      <FormControl variant="outlined" className="formControl">
        <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name="role"
          value={values.role}
          onChange={handleChange}
          label="Role"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="CSS Bread Maker">CSS Bread Maker</MenuItem>
          <MenuItem value="JavaScript dweller">JavaScript Dweller</MenuItem>
          <MenuItem value="Component Picker">Component Picker</MenuItem>
        </Select>
      </FormControl>
      <Button
        type="submit"
        className="submit"
        value="Submit"
        disabled={!values.name || !values.email || !values.role}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </form>
  );
}
