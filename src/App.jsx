import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainScreen from './pages/MainScreen';
import LandingPage from './pages/LandingPage';
import AddInventory from './pages/AddInventory';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<AddInventory />} />
        {/* <Route path="/facts" element={<Facts />} />
        <Route path="/landing" element={<Landing />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
