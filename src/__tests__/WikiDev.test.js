import React from 'react';
import { render } from '@testing-library/react';
import WikiDev from 'pages/WikiDev.js';

test('Article render well', () => {
  const { getByText } = render(<WikiDev />);
  const articleTitle = getByText(/Wiki Dev/i);
  expect(articleTitle).toBeInTheDocument();
});
