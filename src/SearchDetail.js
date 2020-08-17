import React from 'react';
import OmdbTitle from './OmdbTitle';

import './button.css';
import './SearchDetail.css';

function SearchDetail(props) {
  const app = props.app;
  const state = app.state;
  const handleClick = async(e) => {
    e.preventDefault();
  };

  return (
    <div className="SearchDetail">
      <OmdbTitle omdbTitle={state.search.detail} />
      <a href="#" className="button" onClick={handleClick}>
        Add to My Movies!
      </a>
    </div>
  );
}

export default SearchDetail;
