import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "../../Modules/LandingPage/LandingPage";
import Header from './Header';

test('it renders Header componenet', () => {
    render(
    <Header/>,
    {wrapper: MemoryRouter}
    );
    const HOCLinkElement = screen.getByText('Learn HOC');
    expect(HOCLinkElement).toBeInTheDocument();
});


