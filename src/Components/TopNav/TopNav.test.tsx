import React from 'react';
import TopNav  from './TopNav';
import { render,screen } from '@testing-library/react';

it('should render the top navigation', () => {
    render(<TopNav />);
    expect(screen.getByText('Hi')).toBeInTheDocument();
})