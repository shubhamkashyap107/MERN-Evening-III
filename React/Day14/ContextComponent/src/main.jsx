import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UCP from './Utils/Context.jsx'


createRoot(document.getElementById('root')).render(
  <UCP>

    <App />

  </UCP>
)
