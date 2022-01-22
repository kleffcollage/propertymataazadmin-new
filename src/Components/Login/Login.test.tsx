import { render, screen } from '@testing-library/react';
import Login from './Login';

test('render login button', () => {
    render(<Login />);
    const loginButton = screen.getByText(/Login/i);
    expect(loginButton).toBeInTheDocument();
});

