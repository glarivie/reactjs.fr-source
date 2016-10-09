import React, { PropTypes } from 'react';
// import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

// Import styles
import 'css/index.scss';

// Component
import Header from 'components/Header';
import HomeBanner from 'components/HomeBanner';
import Newsletter from 'components/Newsletter';
import Footer from 'components/Footer';

const Pages = ({ children, location: { pathname } }) => (
  <div className="home">
    <Header links={config.nav} pathname={pathname} />
    {pathname === '/' ? (
      <main role="main">
        <HomeBanner blockInfos={config.bannerBlk} />
        <Newsletter image="./assets/rocket-mail.png" />
      </main>
    ) : (<main role="main">{children}</main>)}
    <Footer footerNav={config.footerNav} />
  </div>
);

Pages.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default Pages;
