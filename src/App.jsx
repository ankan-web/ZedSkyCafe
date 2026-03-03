import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Menu from './pages/Menu'
import ZedSkyReservation from './pages/Reservation'
import ZedSkyGallery from './pages/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<ZedSkyReservation />} />
        <Route path="/gallery" element={<ZedSkyGallery />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
