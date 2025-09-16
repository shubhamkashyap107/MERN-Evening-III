import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import store from './Utils/Store.js'
import "./Utils/CounterSlice.js"


createRoot(document.getElementById('root')).render(

    <Provider store={store}>


        <App />


    </Provider>
)
