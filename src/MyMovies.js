import React from 'react';
import axios from 'axios';

import MovieTiles from './MovieTiles';
import view from './view';
import './button.css';

function MyMovies(props) {
  const app = props.app;
  const state = app.state;
  const form = state.myMoviesForm;
  const movies = state.myMovies;

  const handleChange = async(e) => {
    e.preventDefault();
    alert('TODO: implement this functionality.');
  };

  const fetchMyMovies = async() => {
    const url = '/api/myMovieList';
    const response = await axios.get(url);
    // TODO: handle error conditions.
    app.setState({
      myMovies: response.data,
    });
  };

  let content;
  if (movies === null) {
    content = '';
    fetchMyMovies();
  }
  else if (movies.length === 0) {
    content = <h2>you haven't saved any videos!</h2>;
  }
  else {
    content = (
      <MovieTiles
        app={app}
        targetView={view.myMovieDetail}
        movies={movies}
      />
    );
  }

  return (
    <div className="MyMovies">
      <form>
        sort by:
        <select name="sort"
                value={form.sort}
                onChange={handleChange}>
          <option value=""></option>
          <option value="title asc">title asc</option>
          <option value="title desc">title desc</option>
          <option value="year asc">year asc</option>
          <option value="year desc">year desc</option>
        </select>&nbsp;&nbsp;
        watched:
        <input
          type="checkbox"
          name="watched"
          checked={form.watched}
          onChange={handleChange}
        />&nbsp;&nbsp;
        rating:
        <select name="rating"
                value={form.rating}
                onChange={handleChange}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="+2">+2</option>
          <option value="+3">+3</option>
          <option value="+4">+4</option>
          <option value="+5">+5</option>
          <option value="+6">+6</option>
          <option value="+7">+7</option>
          <option value="+8">+8</option>
          <option value="+9">+9</option>
          <option value="-2">-2</option>
          <option value="-3">-3</option>
          <option value="-4">-4</option>
          <option value="-5">-5</option>
          <option value="-6">-6</option>
          <option value="-7">-7</option>
          <option value="-8">-8</option>
          <option value="-9">-9</option>
        </select>&nbsp;
      </form>
      {content}
    </div>
  );
}

export default MyMovies;
