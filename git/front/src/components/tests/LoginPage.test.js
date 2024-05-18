import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from '../LoginPage';

test('renders LoginPage component', () => {
    const { getByLabelText, getByText } = render(<LoginPage />);

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
});
