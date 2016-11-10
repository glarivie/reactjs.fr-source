import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// styles
import styles from './CategoryNav.module.scss';

// Component
const CategoryNav = ({ data, pathname }) => (
  <div className={styles.categoryNav}>
    {data.map(({ name, children }) => (
      <section key={name}>
        <h3>{name}</h3>
        <div className={styles.navList}>
          {children.map(({ title, url }, index) => (
            <Link
              key={index}
              to={`/${pathname.split('/')[1]}/${url}`}
              className={pathname === `/${pathname.split('/')[1]}/${url}` && styles.active}
            >
              {title}
            </Link>
          ))}
        </div>
      </section>
    ))}
  </div>
);

CategoryNav.propTypes = {
  data: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default CategoryNav;
