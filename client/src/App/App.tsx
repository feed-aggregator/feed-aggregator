import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Landing from '../Pages/Landing/Landing';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Signup from '../Pages/Signup/Signup';
import Login from '../Pages/Login/Login';

export default function App() {
  return (
    <div className='App-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
