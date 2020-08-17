import React from 'react';
import { render } from '@testing-library/react';
import ReactApp from './ReactApp';

test('renders learn react link', () => {
  const { getByText } = render(<ReactApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
