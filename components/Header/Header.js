import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import _ from 'lodash';

// Styles
import styles from './Header.module.scss';

// Svg icons
import reactLogo from './react.svg';

class Header extends Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
    pathname: PropTypes.string.isRequired,
  };

  state = {};

  render() {
    const { links, pathname } = this.props;

    return (
      <nav className={cx({ [styles.opaqueNav]: pathname !== '/' })}>
        <div className={styles.homeLogo}>
          <Link to="/">
            <img src={reactLogo} role="presentation" alt="logo-reactjs.fr" />
            <h2>REACT<strong>JS</strong><span>.fr</span></h2>
          </Link>
        </div>
        <div className={styles.homeNavRight}>
          {pathname === '/' && (
            <Link
              to="/javascript/"
              className={cx(styles.homeGetStarted, styles.homeNavLink)}
            >
              Démarrer
            </Link>
          )}
          {links.map((link, index) => (
            <Link
              to={`/${link}/`}
              key={index}
              className={cx({
                [styles.homeNavLink]: true,
                [styles.hideWebPack]: link === 'webpack',
              })}
            >
              {_.capitalize(link)}
            </Link>
          ))}
        </div>
      </nav>
    );
  }
}

export default Header;
