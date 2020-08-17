import React from 'react';
import axios from 'axios';

import view from './view';
import './MovieTiles.css';

function MovieTiles(props) {
  const app = props.app;
  const targetView = props.targetView;
  const movies = props.movies;

  const handleClick = async (imdbID) => {
    if (targetView === view.searchDetail) {
      const url = `/api/omdb/${imdbID}`;
      const response = await axios.get(url);
      return app.setState({
        currentView: targetView,
        searchDetail: response.data,
      })
    }
    else {
      const url = `/api/myMovieList/${imdbID}`;
      const response = await axios.get(url);
      console.log(url, response.data);
      return app.setState({
        currentView: targetView,
        myMovieDetail: response.data,
      });
    }
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
