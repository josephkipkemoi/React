import { render, screen } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";
import { 
    formInput ,
    formInputLabelId,
    formInputTestIdLabel,
    formInputPlaceholderAndLabel,
    formInputTypes,
    } from "./Utils/RegistrationFormUtils";

test('it renders Registration Page', () => {
    
    render(<RegistrationForm/>);

    const registrationHeader = screen.getByTestId('registration-header');
    expect(registrationHeader).toBeInTheDocument();

});

test('it renders Registration Page form input and label elements with specified attributes', () => {

    render(<RegistrationForm/>);

    const firstNameLabelElement = screen.getByTestId(formInputTestIdLabel.firstNameLabelTestId);
    const firstNameElement = screen.getByTestId(formInput.firstNameTestId);
    const lastNameLabelElement =  screen.getByTestId(formInputTestIdLabel.lastNameLabelTestId);
    const lastNameElement = screen.getByTestId(formInput.lastNameTestId);
    const emailLabelElement =  screen.getByTestId(formInputTestIdLabel.emailLabelTestId);
    const emailElement = screen.getByTestId(formInput.emailTestId);
    const phoneNumberLabelElement = screen.getByTestId(formInputTestIdLabel.phoneNumberLabelTestId);
    const phoneNumberElement = screen.getByTestId(formInput.phoneNumberTestId);
    const passwordLabelElement = screen.getByTestId(formInputTestIdLabel.passwordLabelTestId);
    const passwordElement = screen.getByTestId(formInput.passwordTestId);
    const confirmPasswordLabelElement = screen.getByTestId(formInputTestIdLabel.confirmPasswordLabelTestId);
    const confirmPasswordElement = screen.getByTestId(formInput.confirmPasswordTestId);
    const agreeTermsLabelElement =  screen.getByTestId(formInputTestIdLabel.agreeTermsLabelTestId);
    const agreeTermsElement = screen.getByTestId(formInput.agreeTermsTestId);

    /*
        Input assertions:
            label is present
            necessary attributes are present
    */
    expect(firstNameElement).toBeInTheDocument();    
    expect(firstNameLabelElement).toBeInTheDocument();
    expect(firstNameLabelElement).toHaveAttribute("id", formInputLabelId.firstNameLabelTestId);
    expect(firstNameLabelElement).toHaveTextContent(formInputPlaceholderAndLabel.firstName);
    expect(firstNameElement).toHaveAttribute("type", formInputTypes.firstName);
    expect(firstNameElement).toHaveAttribute("placeholder", formInputPlaceholderAndLabel.firstName);
    expect(firstNameElement).toHaveAttribute("id", formInputLabelId.firstNameLabelTestId);
    expect(firstNameElement).toHaveAttribute("aria-describedby", formInputLabelId.firstNameLabelTestId);
    
    expect(lastNameElement).toBeInTheDocument();
    expect(lastNameLabelElement).toBeInTheDocument();
    expect(lastNameLabelElement).toHaveAttribute("id", formInputLabelId.lastNameLabelTestId);
    expect(lastNameLabelElement).toHaveTextContent(formInputPlaceholderAndLabel.lastName);
    expect(lastNameElement).toHaveAttribute("type", formInputTypes.lastName);
    expect(lastNameElement).toHaveAttribute("placeholder", formInputPlaceholderAndLabel.lastName);
    expect(lastNameElement).toHaveAttribute("id", formInputLabelId.lastNameLabelTestId);
    expect(lastNameElement).toHaveAttribute("aria-describedby", formInputLabelId.lastNameLabelTestId);

    expect(emailElement).toBeInTheDocument();
    expect(emailLabelElement).toBeInTheDocument();
    expect(emailLabelElement).toHaveAttribute("id", formInputLabelId.emailLabelTestId);
    expect(emailLabelElement).toHaveTextContent(formInputPlaceholderAndLabel.email);
    expect(emailElement).toHaveAttribute("type", formInputTypes.email);
    expect(emailElement).toHaveAttribute("placeholder", formInputPlaceholderAndLabel.email);
    expect(emailElement).toHaveAttribute("id", formInputLabelId.emailLabelTestId);
    expect(emailElement).toHaveAttribute("aria-describedby", formInputLabelId.emailLabelTestId);

    expect(phoneNumberElement).toBeInTheDocument();
    expect(phoneNumberLabelElement).toBeInTheDocument();
    expect(phoneNumberLabelElement).toHaveAttribute("id", formInputLabelId.phoneNumberLabelTestId);
    expect(phoneNumberLabelElement).toHaveTextContent(formInputPlaceholderAndLabel.phoneNumber);
    expect(phoneNumberElement).toHaveAttribute("type", formInputTypes.phoneNumber);
    expect(phoneNumberElement).toHaveAttribute("placeholder", formInputPlaceholderAndLabel.phoneNumber);
    expect(phoneNumberElement).toHaveAttribute("id", formInputLabelId.phoneNumberLabelTestId);
    expect(phoneNumberElement).toHaveAttribute("aria-describedby", formInputLabelId.phoneNumberLabelTestId);

    expect(passwordElement).toBeInTheDocument();
    expect(passwordLabelElement).toBeInTheDocument();
    expect(passwordLabelElement).toHaveAttribute("id", formInputLabelId.passwordLabelTestId);
    expect(passwordLabelElement).toHaveTextContent(formInputPlaceholderAndLabel.password);
    expect(passwordElement).toHaveAttribute("type", formInputTypes.password);
    expect(passwordElement).toHaveAttribute("placeholder", formInputPlaceholderAndLabel.password);
    expect(passwordElement).toHaveAttribute("id", formInputLabelId.passwordLabelTestId);
    expect(passwordElement).toHaveAttribute("aria-describedby", formInputLabelId.passwordLabelTestId);

    expect(confirmPasswordElement).toBeInTheDocument();
    expect(confirmPasswordLabelElement).toBeInTheDocument();
    expect(confirmPasswordLabelElement).toHaveAttribute("id", formInputLabelId.confirmPasswordLabelTestId);
    expect(confirmPasswordLabelElement).toHaveTextContent(formInputPlaceholderAndLabel.confirmPassword);
    expect(confirmPasswordElement).toHaveAttribute("type", formInputTypes.confirmPassword);
    expect(confirmPasswordElement).toHaveAttribute("placeholder", formInputPlaceholderAndLabel.confirmPassword);
    expect(confirmPasswordElement).toHaveAttribute("id", formInputLabelId.confirmPasswordLabelTestId);
    expect(confirmPasswordElement).toHaveAttribute("aria-describedby", formInputLabelId.confirmPasswordLabelTestId);

    expect(agreeTermsElement).not.toBeChecked();
    expect(agreeTermsLabelElement).toBeInTheDocument();
    expect(agreeTermsLabelElement).toHaveAttribute("id", formInputLabelId.agreeTerms);
    expect(agreeTermsLabelElement).toHaveTextContent(formInputPlaceholderAndLabel.agreeTerms);
    expect(agreeTermsElement).toHaveAttribute("type", formInputTypes.agreeTerms);
    expect(agreeTermsElement).toHaveAttribute("id", formInputLabelId.agreeTerms);
    expect(agreeTermsElement).toHaveAttribute("aria-describedby", formInputLabelId.agreeTerms);

})