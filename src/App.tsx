import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import SEO from './components/seo';
import { HelmetProvider } from 'react-helmet-async';

const LazyMainPage = React.lazy(() => import('./pages/MainPage'));
const LazyProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const LazySignupPage = React.lazy(() => import('./pages/Auth/SignupPage'));
const LazyLoginPage = React.lazy(() => import('./pages/Auth/LoginPage'));

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <HelmetProvider>
      <div className="app">
        <SEO title="Freepik Content Downloader" description="Download Freepik content with ease" />
        <Analytics />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {isAuthenticated ? (
              <>
                <li><Link to="/profile">Profile</Link></li>
                <li><a href="/" onClick={handleLogout}>Logout</a></li>
              </>
            ) : (
              <>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li>
              </>
            )}
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LazyMainPage />} />
            <Route 
              path="/profile" 
              element={isAuthenticated ? <LazyProfilePage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/signup" 
              element={<LazySignupPage onSignup={handleSignup} />} 
            />
            <Route 
              path="/login" 
              element={<LazyLoginPage onLogin={handleLogin} />} 
            />
          </Routes>
        </Suspense>
      </div>
      </HelmetProvider>
    </Router>
  );
};

export default App;