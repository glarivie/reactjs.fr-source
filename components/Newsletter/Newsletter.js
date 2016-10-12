import React, { PropTypes } from 'react';

// Styles
import styles from './Newsletter.module.scss';

// Components
import NewsletterInput from './NewsletterInput';

const Newsletter = ({ image }) => (
  <div className={styles.newsletter}>
    <img src={image} alt="newsletter" role="presentation" />
    <div className={styles.newsletterContent}>
      <h4>Envie de suivre toute l'actualité React ?</h4>
      <p>Abonnez-vous à la <strong>newsletter</strong> pour recevoir dans votre boite e-mail toutes les nouveautés du site, ainsi que de nombreuses informations sur l'évolution de la librairie React.</p>
      <NewsletterInput
        placeholder="Adresse e-mail"
        buttonColor="#e5bb31"
        buttonText="S'inscrire"
      />
    </div>
  </div>
);

Newsletter.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Newsletter;
