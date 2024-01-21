import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { ObjectsPage } from './pages/ObjectsPage/ObjectsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/objects" element={<ObjectsPage />} />
          <Route
                path="*"
                element={<Navigate to="/home" />}
              />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;