import React from 'react';
import { Link } from 'react-router-dom';
import './SignupButton.scss';

export default function SignupButton() {
  return (
    <div className='SignupButton-container'>
      {/* <a className='btn btn-2'>Signup</a> */}
      <Link className='btn btn-2' to='/signup'>
        Sign Up
      </Link>
    </div>
  );
}
