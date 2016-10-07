import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Container, Grid, Span } from 'react-responsive-grid';
import { prefixLink } from 'gatsby-helpers';
import includes from 'underscore.string/include';
import { colors, activeColors } from 'utils/colors';

import { rhythm, adjustFontSizeTo } from 'utils/typography';
import { config } from 'config';

// Import styles
import 'css/main.css';
import 'css/github.css';
import 'css/Pages.scss';

const Pages = ({ children, location: { pathname } }) => (
  <div>
    <div
      style={{
        background: colors.bg,
        color: colors.fg,
        marginBottom: rhythm(1.5),
      }}
    >
      <Container
        className="container"
        style={{ paddingLeft: rhythm(3/4) }}
      >
        <Grid
          columns={12}
          style={{ padding: `${rhythm(3/4)} 0` }}
        >
          <Span
            columns={4}
            style={{ height: 24 /* Ugly hack. How better to constrain height of div? */ }}
          >
            <Link
              to={prefixLink('/')}
              className="link"
              style={{
                color: colors.fg,
                fontSize: adjustFontSizeTo('25.5px').fontSize,
              }}
            >
              {config.siteTitle}
            </Link>
          </Span>
          <Span className="span" columns={8} last>
            <a
              style={{
                color: colors.fg,
                marginLeft: rhythm(1/2),
              }}
              href="https://github.com/gatsbyjs/gatsby"
              target="_blank"
            >
              Github
            </a>
            <Link
              to={prefixLink('/examples/')}
              style={{
                background: pathname.includes('/examples/') ? activeColors.bg : colors.bg,
                color: pathname.includes('/examples/') ? activeColors.fg : colors.fg,
                paddingLeft: rhythm(1/2),
                paddingRight: rhythm(1/2),
                paddingBottom: rhythm(3/4),
                marginBottom: rhythm(-1),
                paddingTop: rhythm(1),
                marginTop: rhythm(-1),
              }}
            >
              Examples
            </Link>
            <Link
              to={prefixLink('/docs/')}
              style={{
                background: pathname.includes('/docs/') ? activeColors.bg : colors.bg,
                color: pathname.includes('/docs/') ? activeColors.fg : colors.fg,
                paddingLeft: rhythm(1/2),
                paddingRight: rhythm(1/2),
                paddingBottom: rhythm(3/4),
                marginBottom: rhythm(-1),
                paddingTop: rhythm(1),
                marginTop: rhythm(-1),
              }}
            >
              Documentation
            </Link>
          </Span>
        </Grid>
      </Container>
    </div>
    <Container
      className="container"
      style={{ padding: `${rhythm(1)} ${rhythm(3/4)}` }}
    >
      {children}
    </Container>
  </div>
);

Pages.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default Pages;
