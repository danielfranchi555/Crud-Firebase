import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { firebaseConections } from './firebase'
import 'bootstrap/dist/css/bootstrap.min.css';

firebaseConections()

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
