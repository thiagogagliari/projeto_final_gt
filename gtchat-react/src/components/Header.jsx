import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <img src="/assets/logo-sem-fundo.png" alt="GTChat Logo" />
        </div>
        <div className="nav-buttons">
          <button className="btn-outline" onClick={goToLogin}>Login</button>
          <button className="btn-fill" onClick={goToRegister}>Cadastre-se</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
