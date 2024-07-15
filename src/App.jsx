import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path='/' element={isAuthenticated ? <Home /> : <Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Login />} />
    </Routes>
  );
};


export default App;