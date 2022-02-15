import React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
import SignupButton from '../../Components/Signup Button/SignupButton';
import LoginButton from '../../Components/Login Button/LoginButton';

export default function Landing() {
  return (
    <div className='Landing-container'>
      <Link to='/dashboard'>DASHBOARD</Link>
      <div className='Landing-text'>
        <h2>Welcome</h2>
        <h3>Please select one of the following</h3>
      </div>
      <div className='Landing-buttons'>
        <SignupButton />
        <LoginButton />
      </div>
    </div>
  );
}
