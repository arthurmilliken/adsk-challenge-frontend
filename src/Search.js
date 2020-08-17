import React from 'react';
import axios from 'axios';

import MovieTiles from './MovieTiles';
import view from './view';
import './button.css';

/**
 * Allows the user to search OMDB for movie titles, and renders the results
 * as a collection of MovieTiles.
 */
function Search(props) {
  const app = props.app;
  const state = app.state;
  const form = state.searchForm;
  const results = state.searchResults;

  // Event handler for updating the search form
  const updateForm = (key, value) => {
    form[key] = value;
    app.setState({
      searchForm: form,
    });
  };

  // Asynchronously execute search against OMDB proxy service.
  const performSearch = async(e) => {
    e.preventDefault();
    if (form.searchText.trim() === '') {
      return alert('please enter search text');
    }
    const searchText = form.searchText;
    const type = form.type;
    const year = form.year;
    const url = '/api/omdb';
    const params = { searchText, type, year };
    const response = await axios.get(url, { params });
    const results = response.data.Response === 'True' ? response.data.Search: [];
    app.setState({
      searchResults: results,
    });
  };

  let content;
  if (results === null) {
    content = '';
  }
  else if (results.length === 0) {
    content = <h2>no videos found, man!</h2>;
  }
  else {
    content = (
      <MovieTiles
        app={app}
        targetView={view.searchDetail}
        movies={results}
      />
    );
  }

  return (
    <div className="Search">
      <form>
        search:&nbsp;
        <input
          type="text"
          name="search"
          value={form.searchText}
          onChange={e => updateForm('searchText', e.target.value) }
        />&nbsp;
        type:&nbsp;
        <select
          name="type"
          value={form.type}
          onChange={e => updateForm('type', e.target.value) }
        >
          <option value=""></option>
          <option value="movie">movie</option>
          <option value="series">series</option>
          <option value="episode">episode</option>
        </select>&nbsp;
        year:&nbsp;
        <input
          type="text"
          name="year"
          value={form.year}
          onChange={e => updateForm('year', e.target.value) }
        />&nbsp;&nbsp;
        <a href="" className="button" onClick={performSearch}>
          search OMDB &gt;
        </a>
      </form>
      {content}
    </div>
  );
}

export default Search;
