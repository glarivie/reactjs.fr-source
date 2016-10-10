import React, { PropTypes } from 'react';
import yaml from 'js-yaml';
import Helmet from 'react-helmet';
import { config } from 'config';

const YamlWrapper = ({ route: { page: { data } } }) => (
  <div>
    <Helmet title={`${config.siteTitle} | ${data.title}`} />
    <h1>{data.title}</h1>
    <p>Raw view of yaml file</p>
    <pre dangerouslySetInnerHTML={{ __html: yaml.safeDump(data) }} />
  </div>
);

YamlWrapper.propTypes = {
  route: PropTypes.object,
};

export default YamlWrapper;
