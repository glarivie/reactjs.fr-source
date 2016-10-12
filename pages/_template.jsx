import React, { PropTypes } from 'react';
// import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

// Import styles
import 'css/index.module.scss';
import styles from 'css/Home.module.scss';

// Component
import Header from 'components/Header';
import Footer from 'components/Footer';

const PagesLayout = ({ children, location: { pathname } }) => (
  <div className={styles.home}>
    <Header links={config.nav} pathname={pathname} />
    {children}
    <Footer footerNav={config.footerNav} />
  </div>
);

PagesLayout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default PagesLayout;
