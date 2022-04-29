import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import App from "../../App";
import LandingPage from './LandingPage';

test('it renders Landing Page Component', () => {
    render(
    <LandingPage/>,
    {wrapper: MemoryRouter}
    ); 
    const linkElement = screen.getByText(/Landing Page/i);
    expect(linkElement).toBeInTheDocument();
});

test("full app rendering/navigating", async () => {  
    const user = userEvent.setup();

    render(
            <App/>  
    );

    expect(screen.getByText(/Learn HOC/i)).toBeInTheDocument();

    await user.click(screen.getByText(/Learn HOC/i));

    expect(screen.getByText(/Component Tutorial/i)).toBeInTheDocument();
})