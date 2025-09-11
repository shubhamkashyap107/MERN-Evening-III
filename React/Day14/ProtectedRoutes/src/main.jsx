import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import UCP from './Utils/UserInfoContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UCP>

      <App />
  
    </UCP>
  </BrowserRouter>
  
)
