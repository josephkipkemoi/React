import { render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import Header from './Header';

test('it renders Header componenet', () => {
    render(
    <Header/>,
    {wrapper: MemoryRouter}
    );

    // const HomeLinkElement = screen.getByTestId('header-home-link');
    // const ReactLinkElement = screen.getByTestId('header-react-link');
    // const LaravelLinkElement = screen.getByTestId('header-laravel-link');
    // expect(HomeLinkElement).toBeInTheDocument();
    // expect(ReactLinkElement).toBeInTheDocument();
    // expect(LaravelLinkElement).toBeInTheDocument();
});

