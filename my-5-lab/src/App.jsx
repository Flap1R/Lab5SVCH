import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { ObjectsPage } from './pages/ObjectsPage/ObjectsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
 import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
 import { ProfilePage } from './pages/ProfilePage/ProfilePage';
 import { ChangePassword } from './pages/ChangePassword/ChangePassword';
 import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/objects" element={<ObjectsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/updatePassword" element={<ChangePassword />} />
          <Route
            path="*"
            element={<Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;