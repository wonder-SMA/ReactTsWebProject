import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import Catalog from './';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Catalog component', () => {
  it('Should render with search, which works correctly', async () => {
    const categories = [
      {
        idCategory: '5',
        strCategory: 'Miscellaneous',
        strCategoryDescription: 'General foods that don\'t fit into another category',
      },
    ];

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: categories}))

    render(<Catalog />);

    await act(() => Promise.resolve<any>({data: categories}));
    expect(screen.getByText('Miscellaneous')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'Miscellaneous');
    expect(screen.getByText('Miscellaneous')).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'Ramda');
    expect(screen.queryByText('Miscellaneous')).toBeNull();
  });
});
