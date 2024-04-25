import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './View/App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
