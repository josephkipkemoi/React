import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import LandingPage from './LandingPage';

test('it renders Landing Page Component', () => {
   
    render(
        <LandingPage/>
    ); 

    const linkElement = screen.getByText(/Landing Page/i);
    expect(linkElement).toBeInTheDocument();

});

test("full app rendering/navigating", async () => {  
    
    const user = userEvent.setup();

    render(
        <App/>  
    );

    expect(screen.getByTestId('header-react-link')).toBeInTheDocument();
    await user.click(screen.getByTestId('header-react-link'));
    expect(screen.getByText(/React Tutorials/i)).toBeInTheDocument();

})  