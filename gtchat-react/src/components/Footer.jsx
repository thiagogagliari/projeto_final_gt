import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <p className="footer-title">Nossos apoiadores</p>
        <div className="sponsors">
          <img src="/assets/digital-college-branco.png" alt="Digital College" />
          <img src="/assets/gt-logo.png" alt="Geração Tech" />
          <img src="/assets/logo-iel2.png" alt="IEL" />
          <img src="/assets/adece-branco.png" alt="ADECE" />
          <img src="/assets/logo-governo-branco.png" alt="Governo do Ceará" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
