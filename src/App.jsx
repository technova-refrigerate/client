import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainScreen from './pages/MainScreen';
import LandingPage from './pages/LandingPage.jsx';
import AddInventory from './pages/AddInventory.jsx';
import StatsPage from './pages/StatsPage.jsx'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<AddInventory />} />
        <Route path="/login" element={<LoginPage />} />
        {/*<Route path="/statspage" element={<StatsPage />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
