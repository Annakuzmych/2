import React from 'react';
import { render } from '@testing-library/react';
import NoPage from '../NoPage';

test('renders NoPage component', () => {
    const { getByText } = render(<NoPage />);
    const headerElement = getByText('Page Not Found');
    const leadElement = getByText('The page you are looking for does not exist.');
    expect(headerElement).toBeTruthy();
    expect(leadElement).toBeTruthy();
});
