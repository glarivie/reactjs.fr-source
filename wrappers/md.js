import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

// Styles
import 'css/markdown-styles.css';

const MarkdownWrapper = ({ route: { page: { data } } }) => (
  <div className="markdown">
    <Helmet title={`${config.siteTitle} | ${data.title}`} />
    <h1>{data.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.body }} />
  </div>
);

MarkdownWrapper.propTypes = {
  route: PropTypes.object,
};

export default MarkdownWrapper;
