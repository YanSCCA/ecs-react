import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import About from "./About.jsx"
import AppLayout from "./AppLayout.jsx"
import Faq from "./Faq.jsx"
import Home from './Home.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
