// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatBar from './components/FloatBar';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* 다른 경로 추가 가능 */}
      </Routes>
      <Footer />
      <FloatBar />
    </Router>
  );
}

export default App;
