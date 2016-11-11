import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Styles
import styles from './CategoryBlock.module.scss';

const CategoryBlock = ({ icon, title, description, url }) => (
  <Link to={url} className={styles.categoryBlock}>
    <div className={styles.catImgBlk} style={{ backgroundImage: `url('${icon}')` }} />
    <h1>{title}</h1>
    <p>{description}</p>
  </Link>
);

CategoryBlock.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CategoryBlock;
