import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { config } from 'config';

const Md = ({ route: { page: { data } } }) => (
  <DocumentTitle title={`${data.title} | ${config.siteTitle}`}>
    <div className="markdown">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
    </div>
  </DocumentTitle>
);

Md.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Md;
