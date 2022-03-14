import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import CustomLink from './';

describe('CustomLink component', () => {
  it('Should contain text node', () => {
    const { container, getByText } = render(
      <MemoryRouter>
      <CustomLink to="home">Главная</CustomLink>
        </MemoryRouter>
    );
    expect(getByText('Главная')).toBeInTheDocument();
    expect(getByText('Главная')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <li>
        <a
          href="/home"
        >
          Главная
        </a>
      </li>
    `);
  });
});
