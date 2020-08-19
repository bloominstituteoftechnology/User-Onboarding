import React from "react";

function Form(props) {
  const { data, submit, dataCheckBox, dataInput } = props;

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

  return (
    <div className="Form">
      <h1>Hello There</h1>
      <form onSubmit={onSubmit}>
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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
