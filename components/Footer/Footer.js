import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

// Dependencies
import NewsletterInput from 'components/Newsletter/NewsletterInput';

// Styles
import './Footer.scss';

// Svg icons
import reactLogo from './react.svg';

const Footer = ({ footerNav }) => (
  <footer>
    <div className="footer-top">
      <div className="top-left">
        <div className="menu">
          <Link
            to="/javascript/"
            className="footer-nav-link"
          >
            Démarrer
          </Link>
          {footerNav.map((link, index) => (
            <Link
              to={`/${link.replace(' ', '-').replace('é', 'e')}/`}
              key={index}
              className="footer-nav-link"
            >
              {_.capitalize(link)}
            </Link>
          ))}
        </div>
        <div className="social">
          <a href="" rel="noopener noreferrer">
            <FontAwesome name="twitter" className="icon" />
            <span>Twitter</span>
          </a>
        </div>
      </div>
      <div className="top-right">
        <div className="megaphone">
          <img src="./assets/megaphone.png" role="presentation" alt="megaphone-react" />
          <div className="text">
            <h3>Les dernières nouveautés dans votre boite mail</h3>
            <p>Inscrivez-vous maintenant à la newsletter pour ne rien manquer !</p>
          </div>
        </div>
        <div className="input">
          <NewsletterInput
            placeholder="Adresse e-mail"
            buttonColor="#ff5622"
            buttonText="Souscrire"
          />
        </div>
      </div>
    </div>
    <div className="footer-down">
      <p>Copyright &copy; 2016 - Reactjs.fr - Tous droits réservés</p>
      <div className="home-logo">
        <img src={reactLogo} role="presentation" alt="logo-reactjs.fr" />
        <h2>REACT<strong>JS</strong><span>.fr</span></h2>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  footerNav: PropTypes.array.isRequired,
};

export default Footer;
