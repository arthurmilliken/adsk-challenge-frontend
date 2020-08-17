import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import view from './view';

describe('App', () => {
  test('renders App component', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Search/)).toBeInTheDocument();
    expect(getByText(/My Movies/)).toBeInTheDocument();
  });

  test.todo('renders Search when "Search" tab is selected');
  test.todo('renders MyMovies when "My Movies" tab is selected');
  test.todo('renders Search when state.currentView is set to view.search');
  test.todo('renders SearchDetail when state.currentView is set to view.searchDetail');
  test.todo('renders MyMovies when state.currentView is set to view.myMovies');
  test.todo('renders MyMovieDetail when state.currentView is set to view.myMovieDetail');
});
