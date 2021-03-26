import react from'react'

export default function profile(props){

const { values, submit, change, disable,error} = props

const onChange = (evt) =>{
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
}
const onSubmit = (evt)=>{
    evt.preventDefault();
    submit();
    
}


return(
  
    <form onSubmit={onSubmit}>
    <h1>{error.username}</h1>
    <h1>{error.term}</h1>
    <div className='select' >
        <label>
          Username
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="email"
          />
        </label>
        <label>
          password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="text"
          />
        </label>
        <label>
          Accept term of use
          <input
            type="checkbox"
            name="term"
            checked={values.term}
            onChange={onChange}
          ></input>
        </label>
        <button id="btn">submit</button>
        </div>
    </form>






    
)

}