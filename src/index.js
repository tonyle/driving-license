import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// Import Font Awesome for icons
import "@fortawesome/fontawesome-free/css/all.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
