import React, { PropTypes } from 'react';

// Styles
import styles from './CategoryBlock.module.scss';

const CategoryBlock = ({ icon, title, description }) => (
  <section className={styles.categoryBlock}>
    <div className={styles.catImgBlk} style={{ backgroundImage: `url('${icon}')` }} />
    <h1>{title}</h1>
    <p>{description}</p>
  </section>
);

CategoryBlock.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default CategoryBlock;
