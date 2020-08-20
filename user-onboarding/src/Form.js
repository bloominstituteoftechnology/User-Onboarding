import React from "react";
import logoImg from "./Logo/Logo-Img.png";

function Form(props) {
  const { data, submit, dataCheckBox, dataInput, errors, disable,resetForm } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onCheckBox = (evt) => {
    const { name, checked } = evt.target;
    dataCheckBox(name, checked);
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    dataInput(name, value);
  };
  const onCancel = evt => {
    evt.preventDefault()
    resetForm()
  }
  return (
    <div className="Form">
      <div className="title-Container">
        <h1>
          Welcome To The User Keeper <img className="Logo" src={logoImg} />
        </h1>
      </div>
      <div className="formContainer">
        <form onSubmit={onSubmit}>
          <div className="errors">
            <div>{errors.first_name}</div>
            <div>{errors.last_name}</div>
            <div>{errors.email}</div>
          </div>

          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              placeholder="Your Username"
              value={data.first_name}
              onChange={onInputChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              placeholder="Your Username"
              value={data.last_name}
              onChange={onInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              value={data.email}
              onChange={onInputChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              placeholder="Your Password"
              value={data.password}
              onChange={onInputChange}
            />
          </label>
          <label className="tos">
            Terms Of Service:
            <input
              type="checkbox"
              name="tos"
              checked={data.tos}
              onChange={onCheckBox}
            />
          </label>
          <div className="button-Box">
            <button disabled={disable}>Submit</button>
            <button onClick={onCancel}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
