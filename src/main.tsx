import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Admin from './pages/Admin';
import Driver from './pages/Driver';
import Client from './pages/Client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav style={{ padding: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/admin" style={{ marginRight: 10 }}>Dispatch</Link>
        <Link to="/driver" style={{ marginRight: 10 }}>Driver</Link>
        <Link to="/client">Client</Link>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

