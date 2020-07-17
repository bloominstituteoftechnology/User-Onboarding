import React, {useState} from 'react';

const Onboarding = props => {
    const [employee, setEmployee] = useState({
        Id:'',
        Name:'',
        Email:'',
        Password:'',
        Textarea:''
    })

    return(
        <form>
            
        <div>
            <div>
            <label htmlFor="name">
                Name
                <input
                type='text'
                name='name'
                id='name'
                value=''
                placeholder='Name'
                />
            </label>
            </div>
            <div>
            <label htmlFor="email">
                Name
                <input
                type='email'
                name='email'
                id='email'
                value=''
                placeholder='Email'
                />
            </label>
            </div>
            <div>
            <label htmlFor="password">
                Name
                <input
                type='password'
                name='password'
                id='password'
                value=''
                placeholder='Password'
                />
            </label>
            </div>
            <div>
            <label htmlFor="checkbox">
                Terms of Service
                <input
                type='checkbox'
                name='checkbox'
                id='checkbox'
                />
            </label>
            </div>
            <div>
            <label htmlFor="submit">
                <input
                type='submit'
                name='submit'
                id='submit'
                />
            </label>
            </div>
            <div>
            <label htmlFor='textarea'>
                Onboarding Team
                <input
                type='textarea'
                name='textarea'
                id='textarea'
                value=''
                />
            </label>
            </div>

        </div>
        </form>
    )
};

export default Onboarding;