import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Dependencies
import CategoryBlock from 'components/CategoryBlock';

// Styles
import './HomeBanner.scss';

const HomeBanner = ({ blockInfos }) => (
  <header style={{ backgroundImage: 'url(\'./assets/spaceship-night.jpg\')' }}>
    <div className="categories">
      {blockInfos.map((el, index) => (
        <CategoryBlock
          key={index}
          title={el[0]}
          description={el[1]}
          icon={el[2]}
          disabled={el[3] === 'true'}
        />
      ))}
    </div>
    <div className="i-am-expert">
      <div
        className="expert-react"
        style={{ backgroundImage: 'url(\'./assets/img-console.svg\')' }}
      />
      <p>Utilisateurs avancés et/ou expert en JavaScript, <Link to="/react/">suivez ce lien</Link>.</p>
    </div>
  </header>
);

HomeBanner.propTypes = {
  blockInfos: PropTypes.array.isRequired,
};

export default HomeBanner;
