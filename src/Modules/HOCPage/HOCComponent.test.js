import { render, screen } from '@testing-library/react';
import HOCComponent from './HOCPage';

test('renders HOC component', () => {
    render(
        <HOCComponent/>
    );
    
    const linkElement = screen.getByText(/Component Tutorial/i);
    expect(linkElement).toBeInTheDocument();
});