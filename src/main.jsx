import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClientProvider } from './context/HTTPClientProvider.js'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClientProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ClientProvider>
  </StrictMode>,
)
