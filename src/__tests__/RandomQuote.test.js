import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { shallow } from 'enzyme';
import RandomQuote from 'pages/RandomQuote.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      en: 'Dev random quote',
      author: 'Quote author'
    })
  })
)

describe('RandomQuote', () => {
  it('load random quote on didMount', async () => {
    await act(async () => render(<RandomQuote/>))
    expect(screen.getByText('Dev random quote')).toBeInTheDocument()
    expect(screen.getByText('~ Quote author')).toBeInTheDocument()
  })
})