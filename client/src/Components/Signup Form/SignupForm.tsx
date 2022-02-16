import React from 'react';
import './SignupForm.scss';
import { Link } from 'react-router-dom';


export default function SignupForm() {
  return (
    <div className='SignupForm-container'>
      <div className='signup-box'>
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
          <a href='#' className='signupform-create-account'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Create Account
          </a>
          <div className='question'>Already have an account?</div>
          <Link to='/login' className='signupform-login'>
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
