// src/App.js
import React from 'react';
import { Header, Body, Footer } from './components';
import FloatBar from './components/FloatBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      <FloatBar /> {/* 플로팅 바 추가 */}
    </div>
  );
}

export default App;
