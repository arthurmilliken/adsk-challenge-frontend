import React from 'react';
import axios from 'axios';

import OmdbTitle from './OmdbTitle';
import view from './view';
import './button.css';
import './SearchDetail.css';

function SearchDetail(props) {
  const app = props.app;
  const state = app.state;
  const imdbID = state.searchDetail.imdbID;

  const addMovie = async(e) => {
    e.preventDefault();
    console.log('SearchDetail.addMovie:', imdbID);
    let url = '/api/myMovieList';
    const body = { imdbID };
    // Save move to myMovieList
    let response = await axios.post(url, body);
    // TODO: handle possible errors.
    console.log(response);
    // Fetch saved movie from myMovieList and switch view to myMovieDetail.
    url = `/api/myMovieList/${imdbID}`;
    response = await axios.get(url);
    console.log(response);
    // TODO: handle possible errors.
    app.setState({
      myMovieDetail: response.data,
      currentView: view.myMovieDetail,
    });
  };

  return (
    <div className="SearchDetail">
      <OmdbTitle omdbTitle={state.searchDetail} />
      <a href="" className="button" onClick={addMovie}>
        Add to My Movies!
      </a>
    </div>
  );
}

export default SearchDetail;
