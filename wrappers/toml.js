import React, { PropTypes } from 'react';
import toml from 'toml-js';
import Helmet from 'react-helmet';
import { config } from 'config';

const TomlWrapper = ({ route: { page: { data } } }) => (
  <div>
    <Helmet title={`${config.siteTitle} | ${data.title}`} />
    <h1>{data.title}</h1>
    <p>Raw view of toml file</p>
    <pre dangerouslySetInnerHTML={{ __html: toml.dump(data) }} />
  </div>
);

TomlWrapper.propTypes = {
  route: PropTypes.object,
};

export default TomlWrapper;
