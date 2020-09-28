import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const { container } = render(<App />);

  test('renders header section', () => {
    const headerSection = container.querySelector('header');

    expect(headerSection).toBeInTheDocument();
    expect(headerSection).toHaveTextContent(/React related repositories list/i);

  });
});
