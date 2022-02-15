import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Landing from '../Pages/Landing/Landing';
import Signup from '../Pages/Singup/Singup';

export default function App() {
  return (
    <div className={'bg'}>
      <div className='App-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
