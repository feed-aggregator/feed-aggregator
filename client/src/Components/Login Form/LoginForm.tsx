import React from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <div className='LoginForm-container'>
      <div className='login-box'>
        <h2>Login</h2>
        <form>
          <div className='user-box'>
            <input type='text' name='' required={true} />
            <label>Email</label>
          </div>
          <div className='user-box'>
            <input type='password' name='' required={true} />
            <label>Password</label>
          </div>
          {/* <button className='forgot-password'>Forogt your password?</button> */}
          <a href='#' className='loginform-login'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
          <div className='question'>Don't have an account?</div>
          <Link to='/signup' className='loginform-signup'>
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
}
