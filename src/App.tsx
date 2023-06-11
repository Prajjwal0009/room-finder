import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import AdminDashboard from './component/Dashboard/AdminDashboard';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path='/home' element={<Outlet />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path='/aboutus' element={<Outlet />}>
            <Route index element={<About />} />
          </Route>
          <Route path='/contact' element={<Outlet />}>
            <Route index element={<Contact />} />
          </Route>
          {/* <Route path='/aboutus' element={<About />}/>
            <Route path='/contactus' element={<Contact />}/> */}
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />}>
          {/* <Route path='/home' element={<Outlet />}>
            <Route index element={<Dashboard />} /> */}
          </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
