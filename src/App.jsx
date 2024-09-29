import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainScreen from './pages/MainScreen';
import LandingPage from './pages/LandingPage.jsx';
import AddInventory from './pages/AddInventory.jsx';
import StatsPage from './pages/StatsPage.jsx'
import PropelLogin from './pages/PropelLogin.jsx';
import LoginPage from './pages/LoginPage.jsx';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<AddInventory />} />
        <Route path="/login" element={<PropelLogin />} />
        {/*<Route path="/statspage" element={<StatsPage />} />*/}
        <Route path="/loginpage" element={<LoginPage />} /> {/*debug stuff*/}
      </Routes>
    </Router>
  );
}

export default App;
