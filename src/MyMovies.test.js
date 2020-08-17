import React from 'react';
import { render, screen } from '@testing-library/react';

import MyMovies from './MyMovies';

// TODO: properly mock axios HTTP client.

describe('MyMovies', () => {
  test.todo('renders MyMovies component');
  test.todo('updates app state when updating inputs');
  test.todo('renders MovieTiles component')

  describe('handleChange', () => {
    test.todo('updates app state when updating inputs');
  });

  describe('fetchMyMovies', () => {
    test.todo('calls axios.get() with the appropriate params');
    test.todo('updates state.myMovies with results');
  });
});
