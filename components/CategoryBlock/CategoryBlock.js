import React, { PropTypes } from 'react';

// Styles
import './CategoryBlock.scss';

const CategoryBlock = ({ icon, title, description }) => (
  <section className="category-block">
    <div className="cat-blk-img" style={{ backgroundImage: `url('${icon}')` }} />
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
