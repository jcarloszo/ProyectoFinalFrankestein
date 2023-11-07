import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ControlAsistencia from './page/ControlAsistencia/ControlAsistencia.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ControlAsistencia />
  </React.StrictMode>,
)
