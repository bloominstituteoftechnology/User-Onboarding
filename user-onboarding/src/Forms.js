import React from "react"

export default function TonyForm(props){
  const {values, submit, change, disable, errors} = props
  
  const onSubmit = evt => {
    evt.preventDefault() //prevents page from refreshing
    submit()  
  }

  const onChange = evt => {
    const {name, value, type, checked} = evt.target //this show the changes happening
  }


  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-sub-con">
        <div className="headlinediv">
          <h2>TONY'S <br></br> FRIEND'S<br></br> LIST</h2>
          <h6>Be My Friend</h6>
          <button disabled={disable}>submit</button>
            <div className="errordiv">
              <div>{errors.name}</div>
              <div>{errors.email}</div>
              <div>{errors.state}</div>
              <div>{errors.food}</div>
              <div>{errors.password}</div>
              <div>{errors.tos}</div>
            </div>
        </div>
      </div>
      <div className="form-inputs">
        <h6>Information Here</h6>
        <label>Name
          <input type="text" name="name" onChange={onChange}/>
        </label>
        <label>Email
          <input type="text" name="email" onChange={onChange}/>
        </label>
        <label>State
          <input type="text" name="state" onChange={onChange}/>
        </label>
        <label>Pizza
          <input type="radio" name="food" value="pizza" onChange={onChange}/>
        </label>
        <label>Tacos
          <input type="radio" name="food" value="tacos" onChange={onChange}/>
        </label>
        <label>Burgers
          <input type="radio" name="food" value="burgers" onChange={onChange}/>
        </label>
        <label>Password
          <input type="password" name="password" onChange={onChange}/>
        </label>
        <label>Terms Of Service
          <input type="checkbox" name="tos"  onChange={onChange}/>
        </label>
      </div>





    </form>
  )
}


