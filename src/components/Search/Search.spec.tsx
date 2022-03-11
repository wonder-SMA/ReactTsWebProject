import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './';

describe('Search component', () => {
  it('Should render with handleSearch callback, which works correctly', () => {
    const onChange = jest.fn();

    render(<Search search="" handleSearch={onChange}/>);

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(5);
  });
  it('Should contain placeholder by default', () => {
    const onChange = jest.fn();

    render(<Search search="" handleSearch={onChange}/>);

    expect(screen.getAllByPlaceholderText('Search...')[0]).toBeInTheDocument();
  });
});

describe('Search snapshot', () => {
  it("Search snapshot didn't change", () => {
    const component = render(<Search search="" handleSearch={() => {}}/>);

    expect(component).toMatchSnapshot();
  });
});
