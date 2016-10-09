import React, { PropTypes, Component } from 'react';
// import { Link } from 'react-router';
// import { prefixLink } from 'gatsby-helpers';
// import { config } from 'config';
// import _ from 'lodash';

// import 'css/Docs.scss';

class Docs extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  static propTypes = {
    children: PropTypes.object,
    route: PropTypes.object,
    location: PropTypes.object,
  };

  handleTopicChange = ({ target: { value } }) => this.context.router.push(value);

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Docs;
