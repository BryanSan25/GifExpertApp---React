import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './Components/GifExpertApp'
import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* REACT STRICT MODE SOLO SE APLICA EN DESARROLLO */}
    <GifExpertApp />
  </React.StrictMode>
)
