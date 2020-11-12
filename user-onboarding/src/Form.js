//Form page

export default function Form(props){
    const { values } = props;
    return(
        <div className = 'form-container'>
            <form>
                <h2>Add your info here!</h2>
                
                <label> Username: 
                    <input
                    values={values.name}
                    name='name'
                    type='text'

                    ></input>
                    </label>
                <label> Email: 
                    <input
                    values={values.email}
                    name='name'
                    type='text'

                    ></input>
                    </label>
                <label> Password:
                    <input
                    values={values.password}
                    name='name'
                    type='text'

                    ></input> 
                    </label><br></br>
                <label> Terms of service: 
                    <input
                    type='checkbox'
                    name='terms of service'
                    checked={values.termsOfService}
                    
                    ></input>
                </label><br></br>
                <button>Submit user information</button>
            </form>
        </div>
    )
}