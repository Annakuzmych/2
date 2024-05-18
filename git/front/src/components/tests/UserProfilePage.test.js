import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserProfilePage from '../UserProfilePage';

jest.mock('axios');

describe('UserProfilePage', () => {
    it('renders user profile data', async () => {
        const mockProfile = {
            name: 'Ann',
            email: 'john.doe@example.com',
            gender: 'Female',
            dob: '1999-01-01'
        };

        axios.get.mockResolvedValue({ data: mockProfile });

        const { getByText } = render(<UserProfilePage />);

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('/api/profile');

        await waitFor(() => {
            expect(getByText('Name')).toBeInTheDocument();
            expect(getByText('Email')).toBeInTheDocument();
            expect(getByText('Gender')).toBeInTheDocument();
            expect(getByText('Date of Birth')).toBeInTheDocument();
            expect(getByText('John Doe')).toBeInTheDocument();
            expect(getByText('john.doe@example.com')).toBeInTheDocument();
            expect(getByText('male')).toBeInTheDocument();
            expect(getByText('1990-01-01')).toBeInTheDocument();
        });
    });

    it('submits the form when Register button is clicked', async () => {
        const { getByLabelText, getByText } = render(<RegistrationPage />);
        const nameInput = getByLabelText('Name');
        const emailInput = getByLabelText('Email');
        const genderSelect = getByLabelText('Gender');
        const dobInput = getByLabelText('Date of Birth');
        const registerButton = getByText('Register');

        const mockSubmit = jest.fn();
        const originalSubmit = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = mockSubmit;

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        fireEvent.change(genderSelect, { target: { value: 'male' } });
        fireEvent.change(dobInput, { target: { value: '1990-01-01' } });
        fireEvent.click(registerButton);

        expect(mockSubmit).toHaveBeenCalled();
        HTMLFormElement.prototype.submit = originalSubmit;
    });

});
