import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './componentes/Header/Header.jsx'
import Hero from './componentes/Hero/Hero.jsx'
import Divisor from './componentes/Divisor.jsx'
import Features from './componentes/Features/Features.jsx'
import PortfolioSection from './componentes/Portfolio/Portfolio.jsx'
import Resumen from './componentes/Experiencia/Resumen.jsx'
import Testimonial from './componentes/Testimonial/Testimonial.jsx'
import Pricing from './componentes/Pricing/Pricing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Hero /> 
    {/* Línea divisora entre Hero y la siguiente sección */}
    <Divisor />
    <Features />
    <Divisor />
    <PortfolioSection />
    <Divisor />
    {/* <Resumen /> */}
    <Testimonial />
    <Divisor />
    <Pricing />
    <Divisor />
  </StrictMode>,
)
