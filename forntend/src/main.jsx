import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { store } from './store/index.jsx'
import MainContext from './Context/MainContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <MainContext>
    <App />
    </MainContext>

</Provider>
   
)
