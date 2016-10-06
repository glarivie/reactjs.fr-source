import React from 'react';
var React = require('react');
document.getElementById('test');

const test2 = `je suis une string ${yolo}`;

class App extends Component {
  static propTypes = {
    yolo: PropTypes.func.isRequired,
  };

  render() {
    return (
      <h1>TEST</h1>
    );
  }
}
