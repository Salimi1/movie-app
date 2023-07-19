import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// Icons
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const Loginpage = () => {
  const { loginOrSignup } = useParams();

  //Login
  const [loginEmailValue, setLoginEmailValue] = useState('');
  const [isLoginEmailValueValid, setIsLoginEmailValueValid] = useState(false);
  const [loginPasswordValue, setLoginPasswordValue] = useState('');
  const [isLoginPasswordValueValid, setIsLoginPasswordValueValid] = useState(false);

  //SignUp
  const [signupEmailValue, setSignupEmailValue] = useState('');
  const [isSignupEmailValueValid, setIsSignupEmailValueValid] = useState(false);
  const [signupPasswordValue, setSignupPasswordValue] = useState('');
  const [isSignupPasswordValueValid, setIsSignupPasswordValueValid] = useState(false);
  const [signupNameValue, setSignupNameValue] = useState('');
  const [isSignupNameValueValid, setIsSignupNameValueValid] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateName = (name) => {
    const nameRegex = /^(?=.*[A-Za-z])[A-Za-z1-9]{8,}$/;
    return nameRegex.test(name);
  };  

  const handleLoginEmailChange = (event) => {
    const email = event.target.value;
    setLoginEmailValue(email);
    setIsLoginEmailValueValid(validateEmail(email));
  };
  const handleSignupEmailChange = (event) => {
    const email = event.target.value;
    setSignupEmailValue(email);
    setIsSignupEmailValueValid(validateEmail(email));
  };

  const handleLoginPasswordChange = (event) => {
    const password = event.target.value;
    setLoginPasswordValue(password);
    setIsLoginPasswordValueValid(validatePassword(password));
  };

  const handleSignupPasswordChange = (event) => {
    const password = event.target.value;
    setSignupPasswordValue(password);
    setIsSignupPasswordValueValid(validatePassword(password));
  };

  const handleSignupNameChange = (event) => {
    const name = event.target.value;
    setSignupNameValue(name);
    setIsSignupNameValueValid(validateName(name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='container-fluid text-light'>
      {loginOrSignup === 'login' ? (
        <div className='w-100 d-flex justify-content-center my-5'>
          <form
            style={{ backgroundColor: '#343a40' }}
            className='col-10 col-sm-6 col-md-4 col-lg-3 px-3 py-4 rounded-2'
            onSubmit={handleSubmit}
          >
            <div className='text-center'>
              <h5 className='text-white'>Anmelden</h5>
            </div>
            <div className='mt-4'>
              <label htmlFor='email' className='form-label text-secondary'>
                E-Mail
              </label>
              <div className='position-relative'>
                <input
                  type='email'
                  id='email'
                  value={loginEmailValue}
                  onChange={handleLoginEmailChange}
                  className={`form-control rounded-1 pe-3 text-secondary ${
                    isLoginEmailValueValid ? 'border border-2 border-primary' : 'border border-2 border-danger'
                  }`}
                />
                <AiOutlineMail style={{ right: '5px', top: '9px' }} className='text-primary fs-5 position-absolute' />
              </div>
            </div>
            <div className='mt-4'>
              <label htmlFor='password' className='form-label text-secondary'>
                Passwort
              </label>
              <div className='position-relative'>
                <input
                  type='password'
                  id='password'
                  value={loginPasswordValue}
                  onChange={handleLoginPasswordChange}
                  className={`form-control rounded-1 pe-4 text-secondary ${
                    isLoginPasswordValueValid ? 'border border-2 border-primary' : 'border border-2 border-danger'
                  }`}
                />
                <RiLockPasswordLine style={{ right: '5px', top: '9px' }} className='text-primary fs-5 position-absolute' />
              </div>
            </div>
            <button type='submit' className='btn btn-primary w-100 mt-4'>
              Anmelden
            </button>
            <p role='button' className='fs-6 text-secondary text-center mt-2'>
              Passwort vergessen?
            </p>
          </form>
        </div>
      ) : (
        <div className='w-100 d-flex justify-content-center my-5'>
          <form
            style={{ backgroundColor: '#343a40' }}
            className='col-10 col-sm-6 col-md-4 col-lg-3 p-4 pb-5 rounded-2'
            onSubmit={handleSubmit}
          >
            <div className='text-center'>
              <h5 className='text-light'>Registrieren</h5>
            </div>
            <div className='mt-4'>
              <label htmlFor='name' className='form-label'>
                Vollständiger Name
              </label>
              <div className='position-relative'>
                <input onChange={handleSignupNameChange} value={signupNameValue} type='text' id='name' className={`form-control pe-3 rounded-1 text-secondary ${isSignupNameValueValid ? 'border border-2 border-primary' : 'border border-2 border-primary'}`} />
                <AiOutlineUser style={{ right: '5px', top: '9px' }} className='text-primary fs-5 position-absolute' />
              </div>
            </div>
            <div className='mt-4'>
              <label htmlFor='email' className='form-label'>
                E-Mail
              </label>
              <div className='position-relative'>
                <input type='email' id='email' className={`form-control pe-3 rounded-1 text-secondary ${isSignupEmailValueValid ? 'border border-2 border-primary' : 'border border-2 border-danger'}`} value={signupEmailValue}
                  onChange={handleSignupEmailChange} />
                <AiOutlineMail style={{ right: '5px', top: '9px' }} className='text-primary fs-5 position-absolute' />
              </div>
            </div>
            <div className='mt-4'>
              <label htmlFor='password' className='form-label'>
                Passwort
              </label>
              <div className='position-relative'>
                <input onChange={handleSignupPasswordChange} value={signupPasswordValue} type='password' id='password' className={`form-control pe-4 rounded-1 text-secondary ${isSignupPasswordValueValid ? 'border border-2 border-primary' : 'border border-2 border-danger'}`} />
                <RiLockPasswordLine style={{ right: '5px', top: '9px' }} className='text-primary fs-5 position-absolute' />
              </div>
            </div>
            <button type='submit' className='btn btn-primary w-100 mt-4'>
              Registrieren
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Loginpage;
