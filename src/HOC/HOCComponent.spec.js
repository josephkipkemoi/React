import { render, screen } from '@testing-library/react';
import HOCComponent from './HOCComponent';

test('renders HOC component', () => {
    render(<HOCComponent/>);
    const linkElement = screen.getByText(/learn HOC/i);
    expect(linkElement).toBeInTheDocument();
  });