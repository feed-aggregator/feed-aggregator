import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Landing from '../Pages/Landing/Landing';
import Dashboard from '../Pages/Dashboard/Dashboard';

export default function App() {
  return (
    <div className={'bg'}>
      <div className='App-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
