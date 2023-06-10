import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';

function App(): JSX.Element {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />}>
            {/* <Route path='/dashboard' element={<Outlet />}>
              <Route index element={<Dashboard />} /> */}
            </Route>
            <Route path='/dashboard' element={<Dashboard />}/>

          {/* </Route> */}
        </Routes>
    </Router>
  );
}

export default App;
