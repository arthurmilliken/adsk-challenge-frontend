import React from 'react';
import { render, screen } from '@testing-library/react';

import MovieTiles from './MovieTiles';

// TODO: correctly mock axios.

describe('MovieTiles', () => {
  test.todo('renders MovieTiles component');
  test.todo('correctly displays Poster and label for each movie');

  describe('movie.onClick', () => {
    test.todo('calls handleClick with appropriate params');
  });

  describe('handleClick()', () => {
    test.todo('correctly sets currentView on app.state');
    test.todo('calls app.setState with the new state');

    describe('when targetView is "searchDetail"', () => {
      test.todo('calls server: /api/omdb/:imdbID');
      test.todo('correctly sets state.search.detail');
      test.todo('displays an alert when component fails');
    });

    describe('when targetView is "myMovieDetail"', () => {
      test.todo('calls server: /api/myMovieList/:imdbID');
      test.todo('correctly sets state.search.detail');
      test.todo('displays an alert when component fails');
    });
  })
});
