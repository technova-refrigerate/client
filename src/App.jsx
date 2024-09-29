import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import LoginPage from './pages/LoginPage';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainScreen />} />
        {/* <Route path="/facts" element={<Facts />} />
        <Route path="/landing" element={<Landing />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
