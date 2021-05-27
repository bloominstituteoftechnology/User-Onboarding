import React, {useState, useEffect} from 'react'
// import './App.css';
import Form from './Components/Form'
import styled from 'styled-components'
// import background from './images/matrix-rain.jpg'
import axios from 'axios'
import * as yup from 'yup'

// import confirmZionFighter from './validation/confirmZionFighter'
import Fighters from './Components/Fighters'

const LoginForm = styled.div`
  background-size:cover;
  background-image: url(${background});
  padding: 0;
`
const HeaderContainer = styled.div``
const Welcome = styled.h1`
  text-align: center;
  font-family: 'DotGothic16', sans-serif;
  font-size: 3rem;
  letter-spacing: 10px;
  width: 80%;
  margin: 0 auto 2%;
  color:white;
`

// Data
const initial = {
  first_name:'',
  email:'',
  password:'',
  tos:false
}

const initialErrors = {
  first_name:'',
  email:'',
  password:'',
  tos:false
}

// const initialZionFighters = []
const buttonStartDisabled = true

function App() {

  const [zionFighters, setZionFighters] = useState([]) //starting members

  const [unplugFromMatrix, setUnplugFromMatrix] = useState(initial) //fill out form

  const [stillPluggedIn, setStillPluggedIn] = useState(initialErrors) //errors

  const [disabled, setDisabled] = useState(buttonStartDisabled)

  const whoIsFighting = () => {
    axios.get("https://reqres.in/api/users")
    .then(res => {
      // console.log(`????`, res.data.data)
      setZionFighters(res.data.data)
    })
    .catch(err => {
      console.log(`Mr. Anderson found you ${err}`)
    })
  }

  // console.log(`fighters`, zionFighters)

  const addFighter = newFighter => {
    axios.post("https://reqres.in/api/users", newFighter)
    .then(res => {
      setZionFighters([...zionFighters, res.data])
      // console.log(`new fighter`, res.data)
    })
    .catch(err => {
      console.log(`Oh, a glitch in the matrix ${err}... RUN`)
    })
    setUnplugFromMatrix(initial)
  }
  // console.log(`new set`, zionFighters)

  const uploadData = (name, value) => {
    yup.reach(confirmZionFighter, name)
      .validate(value)
      .then(() => {
        setStillPluggedIn({...stillPluggedIn, [name]: ""})
      })
      .catch(err => {
        setStillPluggedIn({...stillPluggedIn, [name]: err.errors})
      })
      setUnplugFromMatrix({
        ...unplugFromMatrix,
        [name]: value
      })
  }

  const addFighterForm = data => {

    const newZionFighter = {
        first_name: data.first_name.trim(),
        email: data.email.trim(),
        password: data.password,
        tos: data.tos,
    }
    addFighter(newZionFighter)
  }

  useEffect(() => {
    whoIsFighting()
  }, [])

  useEffect(() => {
    confirmZionFighter.isValid(unplugFromMatrix)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [unplugFromMatrix])

  return (
    <LoginForm>
      <HeaderContainer>
      <Welcome>Wake Up, Neo.</Welcome>
      </HeaderContainer>
      <Form
        values={unplugFromMatrix}
        change={uploadData}
        submit={addFighterForm}
        disabled={disabled}
        errors={stillPluggedIn}
      />
      <Fighters
        fighters={zionFighters}
      />
    </LoginForm>
  );
}

export default App;