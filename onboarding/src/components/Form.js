import React from "react";

export default function OnboardingForm(props) {
  const { values, submit, change, disabled, errors } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  return (
    <form className="form container" onSubmit={onSubmit}>
      <div>
        <h2>Add a User</h2>
      </div>
    </form>
  );
}
