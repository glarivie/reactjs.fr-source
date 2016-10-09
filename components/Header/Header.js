import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import _ from 'lodash';

// Styles
import './Header.scss';

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
      <nav>
        <div className="home-logo">
          <img src={reactLogo} role="presentation" alt="logo-reactjs.fr" />
          <h2>REACT<strong>JS</strong><span>.fr</span></h2>
        </div>
        <div className="home-nav-right">
          <Link
            to="/javascript/"
            className={cx('home-get-started', 'home-nav-link')}
          >
            Démarrer
          </Link>
          {links.map((link, index) => (
            <Link
              to={`/${link}/`}
              key={index}
              className="home-nav-link"
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
