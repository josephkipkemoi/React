import { render, screen } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

test('it renders Registration Page', () => {
    
    render(<RegistrationForm/>);

    const registrationHeader = screen.getByTestId('registration-header');
    expect(registrationHeader).toBeInTheDocument();

})