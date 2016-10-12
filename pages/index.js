import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

// Import styles
import 'css/index.module.scss';

// Component
import HomeBanner from 'components/HomeBanner';
import Newsletter from 'components/Newsletter';

const HomePage = () => (
  <main role="main">
    <Helmet
      title={`${config.siteTitle} | Accueil`}
      meta={[
        {
          name: 'description',
          content: 'Reactjs.fr est un site de tutoriels React et JavaScript en français pour débutants et développeurs confirmés.',
        },
        {
          name: 'keywords',
          content: 'react, reactjs, javascript, français, webpack, redux, es6, es2015, js, html',
        },
      ]}
    />
    <HomeBanner blockInfos={config.bannerBlk} />
    <Newsletter image={prefixLink('/assets/rocket-mail.png')} />
  </main>
);

export default HomePage;
