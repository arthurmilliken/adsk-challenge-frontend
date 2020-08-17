import React from 'react';
import { render, screen } from '@testing-library/react';

import MyMovieDetail from './MyMovieDetail';

// TODO: mock axios

describe('MyMovieDetail', () => {
  test.todo('renders MyMovieDetail component');
  test.todo('renders OmdbDetail component');
  test.todo('clicking button calls removeMovie');

  describe('removeMovie()', () => {
    test.todo('calls axios.delete() and switches to MyMovieList view');
  })

  describe('handleChange()', () => {
    test.todo('changing input field correctly updates state');
    test.todo('changing Watched calls axios.post()');
  });

  describe('handleClick()', () => {
    test.todo('submitting rating calls axios.post() and refreshes view');
    test.todo('submitting comment calls axios.post() and refreshes view')
  });
});
