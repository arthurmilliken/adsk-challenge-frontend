import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from './Search';

// TODO: properly mock axios HTTP client.

describe('Search', () => {
  test.todo('renders Search component');
  test.todo('updates app state when updating inputs');

  describe('button.onClick', () => {
    test.todo('calls performSearch with appropriate params');
    test.todo('rejects form and shows an alert if searchText is left blank');
    test.todo('renders searchResults after search returns');
    test.todo('renders message when no results found')
    test.todo('displays approprate error when component fails');
  });
});
