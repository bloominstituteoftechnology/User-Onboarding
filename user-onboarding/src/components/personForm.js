

export default function personForm(props) {
    const { formValues, submitForm, updateForm } = props;

    const onChange = (event) => {
        const {name, value} = event.target;
        updateForm(name, value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        submitForm()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <h2>Blah Blah Blah</h2>
            <div className='form inputs'>
                <h4>Blah Blah Blah</h4>
                <div className='name'>
                <h3>Name</h3>
                    <label> First Name: 
                        <input 
                            type='text'
                            name='firstName'
                            value={formValues.firstName}
                            onChange={onChange}
                        />
                    </label>
                    <label> Last Name:
                        <input 
                            type='text'
                            name='lastName'
                            value={formValues.lastName}
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>
        </form>
    )
}