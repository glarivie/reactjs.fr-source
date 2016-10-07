import React, { PropTypes } from 'react';
import cx from 'classnames';

// Styles
import './Breakpoints.scss';

const Breakpoint = ({ mobile, children }) => (
  <div
    className={cx({
      'breakpoint-min-width-700': !!mobile,
      'breakpoint-max-width-700': !mobile,
    })}
  >
    {children}
  </div>
);

Breakpoint.propTypes = {
  children: PropTypes.array,
  mobile: PropTypes.bool,
}

export default Breakpoint;
