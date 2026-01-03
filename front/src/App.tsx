import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import MatchesPage from './pages/MatchesPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import LoadingPage from './pages/LoadingPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/match" element={<MatchesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/loading" element={<LoadingPage />} />
    </Routes>
  )
}
  