import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./css/global.css" // just import the global css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App> </App>  only do this when you are passing a child component*/}
    <App />
  </React.StrictMode>
)
