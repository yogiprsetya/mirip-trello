import React from 'react';
import { render } from '@testing-library/react';
import Card from 'pages/CardContainer';

test('Article render well', () => {
  const { getByText } = render(<Card />);
  const cardTitle = getByText(/To Do List/i);
  expect(cardTitle).toBeInTheDocument();
});
