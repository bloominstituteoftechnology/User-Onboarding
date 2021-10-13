import React from 'react'
import { render } from 'react-dom'
import App from './Components/App'
// import { worker } from './api-mocks/browser'
// worker.start()


render(
  <App />
  , document.querySelector('#root')
)
