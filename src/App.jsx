import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Timeline from './components/Timeline'
import Team from './components/Team'
import RecentUpdates from './components/RecentUpdates'
import Portal from './components/Portal'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import LiveChat from './components/LiveChat'
import './App.css'

const Home = () => {
  return <About />
}

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function AppContent() {
  const { user, logout } = useAuth();

  return (
    <div className="app-container">
      {user && <Header />}
      {user && <Navbar onLogout={logout} />}
      <main className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/about" element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          } />
          <Route path="/timeline" element={
            <ProtectedRoute>
              <Timeline />
            </ProtectedRoute>
          } />
          <Route path="/team" element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          } />
          <Route path="/updates" element={
            <ProtectedRoute>
              <RecentUpdates />
            </ProtectedRoute>
          } />
          <Route path="/portals" element={
            <ProtectedRoute>
              <Portal />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
        </Routes>
      </main>
      {user && <Footer />}
      {user && <LiveChat />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App