import React from "react";
import { 
        formInput, 
        formInputLabelId, 
        formInputTestIdLabel, 
        formInputPlaceholderAndLabel, 
        formInputTypes 
      } from "./Utils/RegistrationFormUtils";

export default function RegistrationForm () {
    return (
        <>
            <h1 data-testid="registration-header">Register</h1>
            <form>
                <label data-testid={formInputTestIdLabel.firstNameLabelTestId} id={formInputLabelId.firstNameLabelTestId}>
                    {formInputPlaceholderAndLabel.firstName}
                </label>
                <input 
                id={formInputLabelId.firstNameLabelTestId}
                data-testid={formInput.firstNameTestId}
                type={formInputTypes.firstName}
                placeholder={formInputPlaceholderAndLabel.firstName}
                aria-describedby={formInputLabelId.firstNameLabelTestId}
                />

                <label data-testid={formInputTestIdLabel.lastNameLabelTestId} id={formInputLabelId.lastNameLabelTestId}>
                    {formInputPlaceholderAndLabel.lastName}
                </label>
                <input 
                id={formInputLabelId.lastNameLabelTestId} 
                data-testid={formInput.lastNameTestId} 
                type={formInputTypes.lastName} 
                placeholder={formInputPlaceholderAndLabel.lastName} 
                aria-describedby={formInputLabelId.lastNameLabelTestId}
                />
                
                <label data-testid={formInputTestIdLabel.emailLabelTestId} id={formInputLabelId.emailLabelTestId}>
                    {formInputPlaceholderAndLabel.email}
                </label>
                <input
                id={formInputLabelId.emailLabelTestId} 
                data-testid={formInput.emailTestId} 
                type={formInputTypes.email} 
                placeholder={formInputPlaceholderAndLabel.email} 
                aria-describedby={formInputLabelId.emailLabelTestId}
                />

                <label data-testid={formInputTestIdLabel.phoneNumberLabelTestId} id={formInputLabelId.phoneNumberLabelTestId}>
                    {formInputPlaceholderAndLabel.phoneNumber}
                </label>
                <input 
                id={formInputLabelId.phoneNumberLabelTestId} 
                data-testid={formInput.phoneNumberTestId} 
                type={formInputTypes.phoneNumber}
                placeholder={formInputPlaceholderAndLabel.phoneNumber}
                aria-describedby={formInputLabelId.phoneNumberLabelTestId}
                />

                <label data-testid={formInputTestIdLabel.passwordLabelTestId} id={formInputLabelId.passwordLabelTestId}>
                    {formInputPlaceholderAndLabel.password}
                </label>
                <input 
                id={formInputLabelId.passwordLabelTestId} 
                data-testid={formInput.passwordTestId} 
                type={formInputTypes.password}
                placeholder={formInputPlaceholderAndLabel.password}
                aria-describedby={formInputLabelId.passwordLabelTestId}
                />

                <label data-testid={formInputTestIdLabel.confirmPasswordLabelTestId} id={formInputLabelId.confirmPasswordLabelTestId}>
                    {formInputPlaceholderAndLabel.confirmPassword}
                </label>
                <input 
                id={formInputLabelId.confirmPasswordLabelTestId} 
                data-testid={formInput.confirmPasswordTestId} 
                type={formInputTypes.confirmPassword}
                placeholder={formInputPlaceholderAndLabel.confirmPassword}
                aria-describedby={formInputLabelId.confirmPasswordLabelTestId}
                />

                <label data-testid={formInputTestIdLabel.agreeTermsLabelTestId} id={formInputLabelId.agreeTermsLabelTestId}>
                    {formInputPlaceholderAndLabel.agreeTerms}
                </label>
                <input 
                id={formInputLabelId.agreeTermsLabelTestId} 
                data-testid={formInput.agreeTermsTestId} 
                type={formInputTypes.agreeTerms} 
                aria-describedby={formInputLabelId.agreeTermsLabelTestId}
                />
            </form>
        </>
    )
}