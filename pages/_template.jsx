import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

// Import styles
import 'css/index.scss';
// Component
import Header from 'components/Header';
import CategoryBlock from 'components/CategoryBlock';
import Newsletter from 'components/Newsletter';
import Footer from 'components/Footer';

const Pages = ({ children, location: { pathname } }) => (
  <div className="home">
    <Header links={config.nav} pathname={pathname} />
    {pathname === '/' ? (
      <div className="home-home">
        <div
          className="home-banner"
          style={{ backgroundImage: 'url(\'./assets/spaceship-night.jpg\')' }}
        >
          <div className="categories">
            {config.bannerBlk.map((el, index) => (
              <CategoryBlock
                key={index}
                title={el[0]}
                description={el[1]}
                icon={el[2]}
                disabled={el[3] === 'true'}
              />
            ))}
          </div>
          <div className="i-am-expert">
            <div
              className="expert-react"
              style={{ backgroundImage: 'url(\'./assets/img-console.svg\')' }}
            />
            <p>Utilisateurs avancés et/ou expert en JavaScript, <Link to="/react/">suivez ce lien</Link>.</p>
          </div>
        </div>
        <Newsletter image="http://clipartist.net/openclipart.org/2013/May/May2013/rocket-1969px.png" />
      </div>
    ) : children}
    <Footer />
  </div>
);

Pages.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default Pages;
