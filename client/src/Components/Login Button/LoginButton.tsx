import React from 'react';
import { Link } from 'react-router-dom';
import './LoginButton.scss';

export default function LoginButton() {
  return (
    <div className='LoginButton-container'>
      {/* <a className='btn btn-2'>Login</a> */}
      <Link className='btn btn-2' to='/login'>
        Login
      </Link>
    </div>
  );
}
