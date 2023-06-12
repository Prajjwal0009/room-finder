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
import Room from './pages/Room/Room';
import Area from './pages/Area/Area';
import AddRoom from './pages/Room/AddRoom';
import EditRoom from './pages/Room/EditRoom';

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
        </Route>
        <Route path="/" element={<AdminDashboard />}>
          <Route path='/room' element={<Outlet />}>
            <Route index element={<Room />} />
          </Route>
          <Route path='/area' element={<Outlet />}>
            <Route index element={<Area />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/" element={<AdminDashboard />}>
          <Route path='/add-room' element={<AddRoom />} />
        </Route>
        <Route path="/" element={<AdminDashboard />}>
          <Route path='/edit-room' element={<EditRoom />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
