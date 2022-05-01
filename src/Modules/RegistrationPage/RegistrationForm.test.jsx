import { render, screen } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";
import { formInput } from "./Utils/RegistrationFormUtils";
import userEvent from '@testing-library/user-event';

test('it renders Registration Page', () => {
    
    render(<RegistrationForm/>);

    const registrationHeader = screen.getByTestId('registration-header');
    expect(registrationHeader).toBeInTheDocument();

});

test('it renders Registration Page form input and label elements with specified attributes', () => {

    render(<RegistrationForm/>);

    const elements = screen.getAllByTestId(formInput.uniTest);
    elements.map((element) => expect(element).toBeInTheDocument());
            
});

test("input elements can show text", async () => {

    const user = userEvent.setup();

    render(<RegistrationForm/>);

    await user.click(screen.getByText('First Name'))

})