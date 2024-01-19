import React from 'react';
import "../styles/LoginForm.css"
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  const handleOkRegister = () => {
    navigate('/registration');
  };

  const handleOk = () => {
    navigate('/services');
  };


  return (
    <div className='login'>
      <div className='login-form'>
      <h2>Login to M-Bank</h2>

      <form>
        <div className='label-1'>
        <label htmlFor='accountNumber'>A/C No:</label>
        <input type='text' id='accountNumber'/>
        </div>
        
        <div className='label-2'>
        <label htmlFor='pin'>PIN:</label>
        <input type='password' id='pin' />
        </div>

        <div className='button'>
   
        <button type='submit' className='btn-sub' onClick={handleOkRegister}>Register</button>
        <button type='submit' onClick={handleOk}>OK</button>

        </div>
        
        <button type='button' className='btn' onClick={handleExit}>Exit</button>
      </form>
    </div>
    </div>
  )
}

export default LoginForm;
