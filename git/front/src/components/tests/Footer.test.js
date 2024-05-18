import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

test('renders Footer component', () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText('© 2024 Emotional Intel');
    expect(footerElement).toBeTruthy();
});
