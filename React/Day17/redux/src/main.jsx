import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import shubham from './Utils/Store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={shubham}>

        <App />

    </Provider>
)
