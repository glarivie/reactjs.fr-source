import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

// Dependencies
import NewsletterInput from 'components/Newsletter/NewsletterInput';

// Styles
import styles from './Footer.module.scss';

// Svg icons
import reactLogo from './react.svg';

const Footer = ({ footerNav }) => (
  <footer>
    <div className={styles.footerTop}>
      <div className={styles.topLeft}>
        <div className={styles.menu}>
          <Link
            to="/javascript/"
            className={styles.footerNavLink}
          >
            Démarrer
          </Link>
          {footerNav.map((link, index) => (
            // <Link
            //   to={`/${link.replace(' ', '-').replace('é', 'e')}/`}
            //   key={index}
            //   className={styles.footerNavLink}
            // >
            <Link
              to="/"
              key={index}
              className={styles.footerNavLink}
            >
              {_.capitalize(link)}
            </Link>
          ))}
        </div>
        <div className={styles.social}>
          <a href="https://twitter.com/reactjs_fr" rel="noopener noreferrer">
            <FontAwesome name="twitter" className={styles.icon} />
            <span>Twitter</span>
          </a>
        </div>
      </div>
      <div className={styles.topRight}>
        <div className={styles.megaphone}>
          <img src="/assets/megaphone.png" role="presentation" alt="megaphone-react" />
          <div className={styles.text}>
            <h3>Les dernières nouveautés dans votre boite mail</h3>
            <p>Inscrivez-vous maintenant à la newsletter pour ne rien manquer !</p>
          </div>
        </div>
        <div className={styles.input}>
          <NewsletterInput
            placeholder="Adresse e-mail"
            buttonColor="#ff5622"
            buttonText="Souscrire"
          />
        </div>
      </div>
    </div>
    <div className={styles.footerDown}>
      <p>Copyright &copy; 2016 - Reactjs.fr - Tous droits réservés</p>
      <div className={styles.homeLogo}>
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
