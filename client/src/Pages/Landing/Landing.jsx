import React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
import SignupButton from '../../Components/Signup Button/SignupButton';
import LoginButton from '../../Components/Login Button/LoginButton';

export default function Landing() {
  return (
    <div className='Landing-container'>
      {/* <Link to='/dashboard'>DASHBOARD</Link> */}
      <div className='Landing-text'>
        <h2 className='Landing-welcome'>{'Welcome To ()=>'}</h2>
        <h2 className='Landing-hakrFood'>{'{ hakrFood }'} </h2>
        {/* <h3>Please select one of the following</h3> */}
      </div>
      <div className='Landing-buttons'>
        <SignupButton />
        <LoginButton />
      </div>
      <div className='gif'>
        <img className='gif' src='https://i.gifer.com/3rCC.gif'></img>
      </div>
    </div>
  );
}
