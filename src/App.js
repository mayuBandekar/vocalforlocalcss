import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login';
import Topbar from './topbar/topbar';
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          {/* <Route exact path='topnav' element={<Topbar />} /> */}
          <Route exact path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
