import React from "react";

const Form = (props) => {
  const { change, submit } = props;
  const { username, email, password, tos } = props.values;

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newVal = type === "checkbox" ? checked : value;
    change(name, newVal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div>
      <h1>My form</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
          />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>

        <label>
          Terms of services:
          <input type="checkbox" name="tos" checked={tos} onChange={onChange} />
        </label>
        <input type="submit" value="Create a Friend!" />
      </form>
    </div>
  );
};

export default Form;

// import * as yup from "yup";

// const formSchema = yup.object().shape({
//   username: yup
//     .string()
//     .trim()
//     .required("Username is required!")
//     .min(3, "Username must be 3 characters long!"),
//   email: yup
//     .string()
//     .email("Must be a valid email address")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .required("Password is required!")
//     .min(6, "Password must be 6 characters long!"),
//   tos: yup.boolean().oneOf([true], "Must accept the terms and conditions."),
// });

// export default formSchema;
