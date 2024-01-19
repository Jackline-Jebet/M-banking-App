import React from 'react';
import "../styles/UserForm.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../images/logo rm.png";

const UserForm = () => {
  const navigate = useNavigate();

  const handleUserBack = () => {
    navigate(-1);
  };

  const handleOk = () => {
    navigate('/services')
  };


  return (
    <div className='user-form'>
      <div className='register'>
      <img src={Logo} alt='logo' />
        <h2>User Registration</h2>
        <form>
        <div className='label-1'>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" />
        </div>

        <div className='label-4'>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" />
        </div>

        <div className='label-2'>
        <label htmlFor="accountNumber">Account No:</label>
        <input type="text" id="accountNumber" />
        </div>

        <div className='label-3'>
        <label htmlFor="pin">PIN:</label>
        <input type="password" id="pin" />
        </div>

        <div className='button'>
        <button type="button" onClick={handleUserBack}>Back</button>
        <button type="button" onClick={handleOk}>OK</button>
        </div>
        </form>
      </div>  
    </div>
  )
}

export default UserForm;
