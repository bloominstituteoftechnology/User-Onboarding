import "./App"

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props;
    // const { values, submit, change, disabled, errors } = props;
};
const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
}

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUSe = type === "checkbox" ? checked : value;
    change(name, valueToUSe);
  };

  return (
      <Form onSubmit={onSubmit}>
          <div className='errors'>
              <h2>add new user:</h2>
              <div className='error-container'>
                  <div>{errors.name}</div>
                  <div>{errors.email}</div>
                  <div>{errors.password}</div>
              </div>
          </div>
          <div className='inputs'>
              <label>
                  Name
                  <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onChange} />
              </label>
              <label>
                  Email
                  <input
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={onChange} />
              </label>
              <label>
                  Password
                  <input
                    type='text'
                    name='password'
                    value={values.password}
                    onChange={onChange} />
              </label>
              <label>
                  Terms Of Service
                  <input
                    type='checkbox'
                    name='TermsOfService'
                    checked={values.termsOfService}
                    onChange={onChange} />
              </label>
          </div>
      </Form>
  )