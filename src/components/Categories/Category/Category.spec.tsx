import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Category from './';
import CustomLink from '../../CustomLink';

describe('Category component', () => {
  it('Should render with heading and description', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Category
          idCategory="5"
          strCategory="Miscellaneous"
          strCategoryDescription="General foods that don't fit into another category"/>
      </MemoryRouter>
    );
    expect(getByText('Miscellaneous')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Miscellaneous')).toBeInTheDocument();
    expect(screen.getByText("General foods that don't fit into another . . .")).toBeInTheDocument();
  });
});
