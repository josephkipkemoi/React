import { render, screen } from '@testing-library/react';
import HOCPage from './HOCPage';

test('renders HOC component', () => {
    
    render(
        <HOCPage/>
    );
    
    const linkElement = screen.getByText(/Component Tutorial/i);
    expect(linkElement).toBeInTheDocument();

});