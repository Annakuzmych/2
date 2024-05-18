import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegistrationPage from '../RegistrationPage';

describe('RegistrationPage', () => {
    it('renders all form fields and button', () => {
        const { getByLabelText, getByText } = render(<RegistrationPage />);

        expect(getByLabelText('Name')).toBeTruthy();
        expect(getByLabelText('Email')).toBeTruthy();
        expect(getByLabelText('Gender')).toBeTruthy();
        expect(getByLabelText('Date of Birth')).toBeTruthy();
        expect(getByText('Register')).toBeTruthy();
    });

    it('submits the form when Register button is clicked', () => {
        const { getByLabelText, getByText } = render(<RegistrationPage />);
        const nameInput = getByLabelText('Name');
        const emailInput = getByLabelText('Email');
        const genderSelect = getByLabelText('Gender');
        const dobInput = getByLabelText('Date of Birth');
        const registerButton = getByText('Register');

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        fireEvent.change(genderSelect, { target: { value: 'male' } });
        fireEvent.change(dobInput, { target: { value: '1990-01-01' } });
        fireEvent.click(registerButton);
    });
});
