import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProgramPage from './pages/ProgramPage'
import FacilityPage from './pages/FacilityPage'
import ContactPage from './pages/ContactPage'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/facility" element={<FacilityPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App