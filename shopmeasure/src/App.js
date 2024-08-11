import React from 'react';
import Navbar from './components/Navbar';
import LoginSignUP from './components/LoginSignup/LoginSignUP';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Home /> 

      <Routes>
        {/* <Route path="/home" element={<Home />} />  */}
        <Route exact path="/signin" element={<LoginSignUP />} />
        <Route exact path="/signup" element={<LoginSignUP />} />
      </Routes>
    </Router>
  );
}
export default App;
