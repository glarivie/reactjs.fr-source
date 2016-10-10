import React, { PropTypes } from 'react';
// import Helmet from 'react-helmet';
// import { config } from 'config';

const HtmlWrapper = ({ route: { page: { data } } }) => (
  <div dangerouslySetInnerHTML={{ __html: data.body }} />
);

HtmlWrapper.propTypes = {
  route: PropTypes.object,
};

export default HtmlWrapper;
