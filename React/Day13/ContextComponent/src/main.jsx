import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DemoContextProvider from './Utils/ExampleContext.jsx'

createRoot(document.getElementById('root')).render(
 
    <DemoContextProvider>

        <App />
    
    </DemoContextProvider>

)
