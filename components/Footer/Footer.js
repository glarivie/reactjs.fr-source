import React from 'react';

// Styles
import './Footer.scss';

// Svg icons
import reactLogo from './react.svg';

const Footer = () => (
  <footer>
    <div className="footer-top">

    </div>
    <div className="footer-down">
      <p>Copyright 2016 | Reactjs.fr | Tous droits réservés</p>
      <div className="home-logo">
        <img src={reactLogo} role="presentation" alt="logo-reactjs.fr" />
        <h2>REACT<strong>JS</strong><span>.fr</span></h2>
      </div>
    </div>
  </footer>
);

export default Footer;
