// import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from './context/filterContext.jsx'
// import { CSS } from 'css.gg'

const app = createRoot(document.getElementById('root'))
app.render(
  // <React.StrictMode>
  <FilterProvider>
    <App />
  </FilterProvider>
  // </React.StrictMode>,
)
