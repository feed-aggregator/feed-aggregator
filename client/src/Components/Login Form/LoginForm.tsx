import React from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';
// import SignupButton from '../../Components/Signup Button/SignupButton';
// import LoginButton from '../../Components/Login Button/LoginButton';

export default function LoginForm() {
  return (
    <div className='SignupForm-container'>
      {/* <Link to='/dashboard'>DASHBOARD</Link> */}
      {/* <div className='signup-box'>
        <h2>Signup</h2>
        <form>
          <div className='user-box'>
            <input type='text' name='' required={true} />
            <label>Email</label>
          </div>
          <div className='user-box'>
            <input type='password' name='' required={true} />
            <label>Password</label>
          </div>
          <div className='user-box'>
            <input type='password' name='' required={true} />
            <label>Confirm Password</label>
          </div>
          <a href='#' className='create-account'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Create Account
          </a>
          <div className='question'>Already have an account?</div>
          <Link to='/login' className='login'>
            Login
          </Link>
        </form>
      </div> */}
    </div>
  );
}
