import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

// Import styles
import 'css/Home.scss';

const Pages = ({ children, location: { pathname } }) => (
  <div className="home">
    <h1>test</h1>
    {children}
  </div>
);

Pages.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default Pages;
