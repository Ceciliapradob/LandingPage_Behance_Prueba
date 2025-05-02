import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './componentes/Header/Header.jsx'
import Hero from './componentes/Hero/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Hero /> 
  </StrictMode>,
)
