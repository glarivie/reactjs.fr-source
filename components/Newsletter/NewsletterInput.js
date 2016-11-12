import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

// Styles
import styles from './NewsletterInput.module.scss';

class NewsletterInput extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonText: PropTypes.string,
  };

  state = {
    emailInput: '',
  };

  handleChange = ({ target: { value } }) => this.setState({ emailInput: value });

  render() {
    const { placeholder, buttonText, buttonColor } = this.props;
    const { emailInput } = this.state;

    return (
      <form
        className={cx(styles.newsletterInput, 'validate')}
        action="//reactjs.us14.list-manage.com/subscribe/post?u=2aff359dbf02bb1176d572882&amp;id=9c62b0f794"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <input
          className="required email"
          id="mce-EMAIL"
          onChange={this.handleChange}
          value={emailInput}
          type="email"
          name="EMAIL"
          placeholder={placeholder}
          required
        />
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_2aff359dbf02bb1176d572882_9c62b0f794" tabIndex="-1" value="" />
        </div>
        <button type="submit" style={{ backgroundColor: buttonColor }} id="mc-embedded-subscribe">
          {buttonText}
        </button>
      </form>
    );
  }
}

export default NewsletterInput;
