import React, { PropTypes, Component } from 'react';

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
      <form className={styles.newsletterInput}>
        <input
          onChange={this.handleChange}
          value={emailInput}
          type="email"
          name="email"
          placeholder={placeholder}
          required
        />
        <button type="submit" style={{ backgroundColor: buttonColor }}>
          {buttonText}
        </button>
      </form>
    );
  }
}

export default NewsletterInput;
