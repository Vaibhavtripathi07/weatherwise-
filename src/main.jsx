import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { statecontextprovider } from './context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <statecontextprovider>
    <App />
  </statecontextprovider>,
)
