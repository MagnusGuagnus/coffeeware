import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContactProvider } from '../components/contact/ContactContext'
import HomePage from '../components/pages/HomePage'
import ServicesPage from '../components/pages/ServicesPage'
import TeamPage from '../components/pages/TeamPage'

function App() {
  return (
    <BrowserRouter>
      <ContactProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servizi" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </ContactProvider>
    </BrowserRouter>
  )
}

export default App
