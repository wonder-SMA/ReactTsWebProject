import React from 'react';
import { render, screen } from '@testing-library/react';

import Category from './';

describe('Category component', () => {
  it('Should render with heading and description', () => {
    render(<Category
      idCategory="5"
      strCategory="Miscellaneous"
      strCategoryDescription="General foods that don't fit into another category"/>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Miscellaneous')).toBeInTheDocument();
    expect(screen.getByText("General foods that don't fit into another category")).toBeInTheDocument();
  });
});
