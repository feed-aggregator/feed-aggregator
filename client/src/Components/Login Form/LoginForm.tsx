import React, { useRef } from 'react';
import './LoginForm.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  let userEmail = '';
  let userPassword = '';

  /* LOGIN ACCOUNT */

  const loginAccount = (e: any) => {
    console.log('login clicked');

    /* CHECK IF ALL FIELDS NOT NULL */
    e.preventDefault();
    console.log('CLICKED');

    if (emailInput.current && passwordInput.current) {
      // console.log(emailInput.current.value);
      // console.log(passwordInput.current.value);

      userEmail = emailInput.current.value;
      userPassword = passwordInput.current.value;

      /* MAKE CALL TO BACKEND */
      if (userEmail.length && userPassword.length) {
        fetch('http://localhost:3000/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: userEmail, password: userPassword }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.err) {
              console.log(data.err);
            }
            console.log(data.result);
            if (data.result) {
              navigate('/dashboard');
            }
          });
      }
    }
  };

  /* RETURN RENDER */
  return (
    <div className='LoginForm-container'>
      <div className='login-box'>
        <h2>Login</h2>
        <form>
          <div className='user-box'>
            <input type='text' name='' required={true} ref={emailInput} />
            <label>Email</label>
          </div>
          <div className='user-box'>
            <input
              type='password'
              name=''
              required={true}
              ref={passwordInput}
            />
            <label>Password</label>
          </div>
          {/* <button className='forgot-password'>Forogt your password?</button> */}
          <button className='loginform-login' onClick={loginAccount}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
          <div className='question'>Don't have an account?</div>
          <Link to='/signup' className='loginform-signup'>
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
}
