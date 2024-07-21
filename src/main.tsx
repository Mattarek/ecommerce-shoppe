import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './i18n.js'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
