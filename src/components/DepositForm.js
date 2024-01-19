import React from 'react';
import "../styles/DepositForm.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../images/logo rm.png";


const DepositForm = () => {
  const navigate = useNavigate();

  const handleDepositBack = () => {
    navigate('/services')
  }
  return (
    <div className='deposit'>
      <div className='deposit-form'>
      <img src={Logo} alt='logo' />
        <h2>Deposit</h2>

        <form>
          <div className='amount-label'>
          <label htmlFor='amount'>Amount:</label>
          <input type='number' id='amount' />
          </div>

          <div className='deposit-btn'>
          <button type='button' onClick={handleDepositBack}>Back</button>
          <button type='submit'>OK</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default DepositForm;
