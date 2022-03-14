import React from 'react';
import {fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './';

describe('Search component', () => {
  it('Should render with handleSearch callback, which works correctly', () => {
    const onChange = jest.fn();

    const { getByRole } = render(<Search search="" handleSearch={onChange}/>);

    userEvent.type(getByRole('textbox'), 'React');

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(5);
  });
  it('Should call callback when user inputs query', () => {
    const onChange = jest.fn();

    const { getByDisplayValue } = render(
      <Search search="initial" handleSearch={onChange}/>
    );

    fireEvent.change(getByDisplayValue('initial'), {target: {value: 'search'}})

    expect(onChange).toBeCalled();
  });
  it('Should contain placeholder by default', () => {
    const onChange = jest.fn();

    const { getAllByPlaceholderText } = render(<Search search="" handleSearch={onChange}/>);

    expect(getAllByPlaceholderText('Search...')[0]).toBeInTheDocument();
  });
});

describe('Search snapshot', () => {
  it("Search snapshot didn't change", () => {
    const component = render(<Search search="" handleSearch={() => {}}/>);

    expect(component).toMatchSnapshot();
  });
});
