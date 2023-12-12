import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Create from './components/Create';
import Update from './components/Update';
import Champion from './components/ChampionFetcher';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Champion />
      <Routes>

      </Routes>
    </Router>
  );
}

export default App;
