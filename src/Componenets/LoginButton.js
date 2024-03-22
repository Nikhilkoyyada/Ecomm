// LoginButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <button className="user-login" onClick={handleLogin}>Login</button>
  );
};

export default LoginButton;
