import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

const Html = ({ body }) => (
  <html lang="fr">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet" />
      <title>{DocumentTitle.rewind()}</title>
      {process.env.NODE_ENV === 'production' ? (
        <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
      ) : false}
      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
      <link rel="icon" type="image/png" href="./assets/favicon.png" />
    </head>
    <body>
      <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
      <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
    </body>
  </html>
);

Html.displayName = 'HTML';

Html.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Html;
