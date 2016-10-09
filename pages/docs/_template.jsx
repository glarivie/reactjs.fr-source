import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Breakpoint from 'components/Breakpoint';
import find from 'lodash/find';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import _ from 'lodash';

// import 'css/Docs.scss';

class Docs extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static propTypes = {
    children: PropTypes.object,
    route: PropTypes.object,
  };

  handleTopicChange = ({ target : { value } }) => this.context.router.push(value);

  render() {
    const { route: { pages }, children, location: { pathname } } = this.props;
    const childPages = config.docPages.map((p) => {
      const { data: { title }, path } = find(pages, (_p) => _p.path === p);
      return ({ title, path });
    });
    const docOptions = childPages.map(({ path, title }) => (
      <option
        key={prefixLink(path)}
        value={prefixLink(path)}
      >
        {title}
      </option>
    ));
    const docPages = childPages.map(({ path, title }, index) => (
      <li
        key={index}
        className="list"
      >
        <Link to={prefixLink(path)}>
          {_.isEqual(prefixLink(path), pathname) ? <strong>{title}</strong> : title}
        </Link>
      </li>
    ));

    return (
      <div>
        <Breakpoint mobile>
          <nav>
            <ul>
              {docPages}
            </ul>
          </nav>
          <div>
            {children}
          </div>
        </Breakpoint>
        <Breakpoint>
          <strong>Topics:</strong>
          {' '}
          <select
            defaultValue={pathname}
            onChange={this.handleTopicChange}
          >
            {docOptions}
          </select>
          <br />
          <br />
          {children}
        </Breakpoint>
      </div>
    );
  }
}

export default Docs;
