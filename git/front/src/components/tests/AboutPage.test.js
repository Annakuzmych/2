import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import AboutPage from '../AboutPage';

test('renders AboutPage component', () => {
    const { getByText } = render(
        <MemoryRouter>
            <AboutPage />
        </MemoryRouter>
    );

    expect(getByText(/The website focuses on emotional intelligence/)).toBeInTheDocument();
    expect(getByText('Some info')).toBeInTheDocument();
    expect(getByText('Be intelligence')).toBeInTheDocument();
    expect(getByText('For more information')).toBeInTheDocument();
});
