import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';

function App(): JSX.Element {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            {/* <Route path='/dashboard' element={<Outlet />}>
              <Route index element={<Dashboard />} /> */}
            </Route>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>


          {/* </Route> */}
        </Routes>
    </Router>
  );
}

export default App;
