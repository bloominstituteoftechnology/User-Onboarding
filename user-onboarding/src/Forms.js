import React from "react"

export default function TonyForm(props){
  const {values, submit, change, disabled, errors} = props
  
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
        <h1>TONY'S FRIENDS LIST</h1>
        <h3>Be My Friend</h3>
         <button disabled={button}>submit</button>
        <div className="errordiv">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.state}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
      </div>
      <div>
        
      </div>





    </form>
  )
}


