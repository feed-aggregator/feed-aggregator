import React, { useRef } from 'react';
import './SignupForm.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const navigate = useNavigate();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);

  let userEmail = '';
  let userPassword = '';
  let userConfirmPassword = '';

  /* CREATE ACCOUNT */
  const createAccount = (e: any) => {
    /* CHECK IF ALL FIELDS NOT NULL AND PASSWORDS MATCH */
    e.preventDefault();
    console.log('CLICKED');

    if (
      emailInput.current &&
      passwordInput.current &&
      confirmPasswordInput.current
    ) {
      console.log(emailInput.current.value);
      console.log(passwordInput.current.value);
      console.log(confirmPasswordInput.current.value);

      userEmail = emailInput.current.value;
      userPassword = passwordInput.current.value;
      userConfirmPassword = confirmPasswordInput.current.value;

      /* MAKE CALL TO BACKEND */
      if (
        userEmail.length &&
        userPassword.length &&
        userConfirmPassword.length
      ) {
        /* IF PASSWORD MATCH, CALL BACKEND */
        if (
          passwordInput.current.value === confirmPasswordInput.current.value
        ) {
          console.log('FETCHING');
          fetch('http://localhost:3000/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: userEmail,
              password: userPassword,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              // navigate('/dashboard');
              console.log(data);
              if (data.err) {
                console.log(data.err);
              }
              console.log(data.result);
              if (data.result) {
                navigate('/dashboard');
              }
            });
        } else {
          alert(`Passwords don't match`);
        }
      }
    }
  };

  // TEST NAV
  // const testNav = (e: any) => {
  //   e.preventDefault();
  //   console.log('clicked test nav');
  //   // setToDashboard(true);
  //   navigate('/dashboard');
  //   // return;
  // };

  /* RETURN RENDER */
  return (
    <div className='SignupForm-container'>
      <div className='signup-box'>
        <h2>Signup</h2>
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
          <div className='user-box'>
            <input
              type='password'
              name=''
              required={true}
              ref={confirmPasswordInput}
            />
            <label>Confirm Password</label>
          </div>
          <button className='signupform-create-account' onClick={createAccount}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Create Account
          </button>
          <div className='question'>Already have an account?</div>
          <Link to='/login' className='signupform-login'>
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
