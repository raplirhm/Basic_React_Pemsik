
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PropPage from './components/Prop';
import StatePage from './components/State';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<PropPage />} />
          <Route path="/state" element={<StatePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
