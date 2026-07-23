import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContactProvider } from '../components/contact/ContactContext'
import HomePage from '../components/pages/HomePage'
import ServicesPage from '../components/pages/ServicesPage'
import TeamPage from '../components/pages/TeamPage'
import ContactPage from '../components/pages/ContactPage'
import BookingPage from '../components/pages/BookingPage'

function App() {
  return (
    <BrowserRouter>
      <ContactProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servizi" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contatti" element={<ContactPage />} />
          <Route path="/prenota" element={<BookingPage />} />
        </Routes>
      </ContactProvider>
    </BrowserRouter>
  )
}

export default App
