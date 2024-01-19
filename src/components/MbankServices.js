import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/MbankServices.css";
import Logo from "../images/logo rm.png";

const MbankServices = ()  => {
  const navigate = useNavigate();

  const handleDeposit = () => {
    navigate('/deposit')
    console.log('Deposit service clicked');
  };

  const handleBalanceEnquiry = () => {
    navigate('/balance')
    console.log('Balance Enquiry service clicked');
  };

  const handleStopCheque = () => {
    navigate('/cheque')
    console.log('Stop Cheque service clicked');
  };

  const handleChangePIN = () => {
    navigate('/change')
    console.log('Change PIN service clicked');
  };

  const handleFinancialTips = () => {
    navigate('/finance')
    console.log('Financial Tips service clicked');
  };

  const handleBack = () => {
    navigate('/login'); // Navigate back one step in the history
  };

  return (
    <div className='services'>
      <div className='mbank-services'>
      <img src={Logo} alt='logo' />
        <h2>M-Bank Services</h2>
      
      <div className='service-btn'>
        <button type="button" onClick={handleDeposit}>Deposit</button>
        <button type="button" onClick={handleBalanceEnquiry}>Balance Enq</button>
        <button type="button" onClick={handleStopCheque}>Stop Cheque</button>
        <button type="button" onClick={handleChangePIN}>Change PIN</button>
        <button type="button" onClick={handleFinancialTips}>Financial Tips</button>
        <button type="button" onClick={handleBack}>Back</button>
      </div>
      </div>
      
    </div>
  )
}

export default MbankServices;
