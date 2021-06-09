import styled from 'styled-components'

const IdDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 30%;
  border-right: 2px dashed grey;
`

const Label = styled.div`
  font-variant: small-caps;
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 80%;
`
const Input = styled.input`
    padding: 5px;
    margin-left: 10px;
`

const FormOne = styled.form`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    border: 2px solid grey;
    border-radius: 3px;
    padding: 5px;
    box-shadow: 2px 2px 8px inset grey;
`
const Warning = styled.div`
    color: red;
    font-family: monospace, sans-serif;
    font-variant: initial;
    font-size: .8rem;
`
const Lab = styled.div`
    width:50%;
    text-align: center;
`

const Form = ({ reactSubmit, userForm, user, disabled, errorUser }) => {

    const preventSubmit = (e) => {
        e.preventDefault()
        reactSubmit()
    }

    return(
        <FormOne onSubmit={e => {preventSubmit(e)}}>
            <IdDiv>
                <Label>
                    <Lab>Name</Lab>
                    <Lab>
                        <Input id="name" type="text" name="name" value={user.name} onChange={userForm}/>
                    </Lab>
                </Label>
                <Warning>{errorUser.name}</Warning>
                <Label>
                    <Lab>Email</Lab>
                    <Lab>
                        <Input type="mail" name="email" value={user.email} onChange={userForm}/>
                    </Lab>
                </Label>
                <Warning>{errorUser.email}</Warning>
                <Label>
                    <Lab>Password</Lab>
                    <Lab>
                        <Input type="text" name="password" value={user.password} onChange={userForm}/>
                    </Lab>
                </Label>
                <Warning>{errorUser.password}</Warning>
            </IdDiv>
            <IdDiv>
                <Label>
                    <Lab>Role</Lab>
                    <Lab>
                        <select name="role" id="role" value={user.role} onChange={userForm}>
                            <option value="" disabled>== Select ==</option>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Unknown">Unknown</option>
                            <option value="Mentor">Mentor</option>
                            <option value="Other">Other</option>

                        </select>

                    </Lab>
                </Label>
                <Label>
                    I accept the terms of service
                    <Input type="radio" name="termOfUse" value={user.termOfUse} onChange={userForm}/> 
                </Label>
                <Label>
                    <Input type="submit" disabled={disabled}/>
                </Label>
            </IdDiv>
        </FormOne>
    )
}

export default Form 