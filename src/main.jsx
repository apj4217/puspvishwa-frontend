import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import CartProvider from './components/CardContext.jsx'
import Loginpage from './pages/Loginpage.jsx'
import Register from './pages/Registerpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <BrowserRouter>
    <App />
   
    </BrowserRouter>
    </CartProvider>

  </StrictMode>,
)
