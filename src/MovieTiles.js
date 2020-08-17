import React from 'react';
import axios from 'axios';

import view from './view';
import './MovieTiles.css';

function MovieTiles(props) {
  const app = props.app;
  const state = app.state;
  const targetView = props.targetView;
  const movies = props.movies;

  const handleClick = async (imdbID) => {
    if (targetView === view.searchDetail) {
      const url = `/api/omdb/${imdbID}`;
      const response = await axios.get(url);
      console.log(url, response.data);
      if (response.data && response.data.Response === 'True') {
        state.search.detail = response.data;
      }
      else {
        return alert(`Error calling ${url}: ${response.data}`);
      }
    }
    else {
      const url = `/api/myMovieList/${imdbID}`;
      const response = await axios.get(url);
      if (response.data && response.data.Response === 'True') {
        state.myMovies.detail = response.data;
      }
      else {
        return alert(`Error calling ${url}: ${response.data}`);
      }
    }
    state.currentView = targetView;
    app.setState(state);
  };

  return (
    <ul className="MovieTiles">
    {movies.map(m => {
      let poster = m.Poster;
      if (poster === 'N/A') {
        if (m.Type === 'series') {
          poster = '/icon_series.jpg';
        }
        else if (m.Type === 'episode') {
          poster = '/icon_episode.jpg';
        }
        else {
          poster = '/icon_movie.jpg';
        }
      }
      const label = `${m.Title} (${m.Year}) [${m.Type}]`;
      return (
        <li key={m.imdbID} onClick={(e) => handleClick(m.imdbID)}>
          <img title={label} alt={label} src={poster} /><br />
          {label}
        </li>
      );
    })}
    </ul>
  );
}

export default MovieTiles;
