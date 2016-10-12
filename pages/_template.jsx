import React, { PropTypes } from 'react';
// import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

// Import styles
import styles from 'css/index.module.scss';

// Component
import Header from 'components/Header';
import Footer from 'components/Footer';

const PagesLayout = ({ children, location: { pathname } }) => (
  <div className={styles.home}>
    <Header links={config.nav} pathname={pathname} />
    {pathname === '/' ? children : (
      <main role="main">
        {children}
      </main>
    )}
    <Footer footerNav={config.footerNav} />
  </div>
);

PagesLayout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default PagesLayout;
