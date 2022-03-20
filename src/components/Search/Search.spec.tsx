import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './';

describe('Search component', () => {
  it('Should render with handleSearch callback, which works correctly', () => {
    const mockCallback = jest.fn();
    const { getByRole } = render(
      <Search
        searchValue=""
        handleSearch={mockCallback} />
    );
    userEvent.type(getByRole('textbox'), 'React');
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledTimes(5);
  });
  it('Should call callback when user inputs query', () => {
    const mockCallback = jest.fn();
    const { getByDisplayValue } = render(
      <Search
        searchValue='test'
        handleSearch={(event) => {
          mockCallback(event.target.value)
        }} />
    );
    fireEvent.change(getByDisplayValue('test'), {
      target: {
        value: 'React'
      }
    });
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback.mock.calls[0][0]).toBe('React');
  });
  it('Should contain placeholder by default', () => {
    const mockCallback = jest.fn();
    const { getAllByPlaceholderText } = render(<Search searchValue="" handleSearch={mockCallback} />);
    expect(getAllByPlaceholderText('Search...')[0]).toBeInTheDocument();
  });
});

describe('Search snapshot', () => {
  it("Search snapshot didn't change", () => {
    const component = render(<Search searchValue="" handleSearch={() => {}}/>);
    expect(component).toMatchSnapshot();
  });
});
