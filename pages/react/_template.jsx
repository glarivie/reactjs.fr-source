import React, { PropTypes } from 'react';
import styles from 'css/Category.module.scss';

// Component
import CategoryNav from 'components/CategoryNav';

// Constants
import constants from '../constants';

const CategoryLayout = ({ children, location: { pathname } }) => (
  <main role="main" className={styles.categoryLayout}>
    <div className={styles.menu}>
      <CategoryNav
        data={constants[pathname.split('/')[1]]}
        pathname={pathname}
      />
    </div>
    <div className={styles.content}>
      {children}
    </div>
  </main>
);

CategoryLayout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default CategoryLayout;
