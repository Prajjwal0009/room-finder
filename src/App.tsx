import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/my-events" element={<Outlet />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
