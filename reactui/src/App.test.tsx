// https://www.newline.co/@kchan/testing-a-create-react-app-typescript-project-with-jest-and-react-testing-library--c157b34e

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
