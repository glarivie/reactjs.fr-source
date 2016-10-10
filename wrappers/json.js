import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

const JsonWrapper = ({ route: { page: { data } } }) => (
  <div>
    <Helmet title={`${config.siteTitle} | ${data.title}`} />
    <h1>{data.title}</h1>
    <p>Raw view of json file</p>
    <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 4) }} />
  </div>
);

JsonWrapper.propTypes = {
  route: PropTypes.object,
};

export default JsonWrapper;
