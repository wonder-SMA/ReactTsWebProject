import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import Catalog from './';

// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Catalog component', () => {
  it('Should render with search, which works correctly', async () => {
    const categories = [
      {
        idCategory: '5',
        strCategory: 'Miscellaneous',
        strCategoryDescription: 'General foods that don\'t fit into another category',
      },
    ];

    // mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: categories}));

    const { getByText, getByRole, queryByText } = render(
      <MemoryRouter>
        <Catalog data={categories}/>
      </MemoryRouter>
    );

    // await act(() => Promise.resolve<any>({data: categories}));
    expect(getByText('Miscellaneous')).toBeInTheDocument();

    userEvent.type(getByRole('textbox'), 'Miscellaneous');
    expect(getByText('Miscellaneous')).toBeInTheDocument();

    userEvent.type(getByRole('textbox'), 'Ramda');
    expect(queryByText('Miscellaneous')).toBeNull();
  });
});
