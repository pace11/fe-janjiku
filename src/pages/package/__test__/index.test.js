import React from 'react';
import App from '../package-1';
import { render, cleanup, screen } from '@testing-library/react';
describe('<MemberFunction/>', () => {
  afterEach(cleanup);

  it('render correctly', async () => {
    render(<App />);
    const heading = screen.getByRole('input')
    expect(heading).toHaveValue('test');
  });
});
