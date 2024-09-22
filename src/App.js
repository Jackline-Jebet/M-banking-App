import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './MainApp.css';
import HomePage from '../api/components/HomePage';
import LoginForm from '../api/components/LoginForm';
import "./MainApp.css"
import UserForm from '../api/components/UserForm';
import MbankServices from '../api/components/MbankServices';
import DepositForm from '../api/components/DepositForm';
import ChequeForm from '../api/components/ChequeForm';
import BalanceEnq from '../api/components/BalanceEnq';
import ChangePin from '../api/components/ChangePin';
import FinancialTips from '../api/components/FinancialTips';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registration" element={<UserForm />} />
          <Route path="/services" element={<MbankServices />} />
          <Route path="/deposit" element={<DepositForm/>} />
          <Route path="/cheque" element={<ChequeForm/>} />
          <Route path="/balance" element={<BalanceEnq/>} />
          <Route path="/change" element={<ChangePin/>} />
          <Route path="/finance" element={<FinancialTips/>} />
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
