import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import About from './pages/MainDashboard/About/About';
import Contact from './pages/MainDashboard/Contact/Contact';
import AdminDashboard from './component/Dashboard/AdminDashboard';
import Room from './pages/Room/Room';
import Area from './pages/Area/Area';
import AddRoom from './pages/Room/AddRoom';
import EditRoom from './pages/Room/EditRoom';
import Home from './pages/MainDashboard/Home/Home';
import RoomDetails from './pages/MainDashboard/RoomDetails/RoomDetails';
import { QueryClient, QueryClientProvider } from 'react-query';
import ContactUs from './pages/ContactUs/ContactUs';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path='/' element={<Outlet />}>
              <Route index element={<Home />} />
            </Route>
            <Route path='/room-details' element={<Outlet />}>
              <Route index element={<RoomDetails />} />
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
            <Route path='/contactUs' element={<Outlet />}>
              <Route index element={<ContactUs />} />
            </Route>
            <Route path='/area' element={<Outlet />}>
              <Route index element={<Area />} />
            </Route>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin' element={<AdminDashboard />} />

          <Route path="/" element={<AdminDashboard />}>
            <Route path='/add-room' element={<AddRoom />} />
          </Route>
          <Route path="/" element={<AdminDashboard />}>
            <Route path='/edit-room/:id' element={<EditRoom />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
