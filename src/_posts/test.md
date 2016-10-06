---
title: test
date: 2016-10-06 15:58:44
tags:
  - js
  - react
categories:
  - React
---

this is a test

# h1
## h2
### h3
#### h4
##### h5

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

this text is **bold**
this text is *oblique*

{% codeblock lang:javascript %}
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

{% endcodeblock %}

``` js
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
```

{% gist 2b87fe4f923d1faef96e9381ed0f8741 react-test.js %}

{% include_code titre lang:js test.js %}

{% youtube 3GjNX7jcLK0 %}
