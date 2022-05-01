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
                <label data-testid={formInput.uniTest} id={formInputLabelId.firstNameLabelTestId}>
                    {formInputPlaceholderAndLabel.firstName}
                </label>
                <input 
                id={formInputLabelId.firstNameLabelTestId}
                data-testid={formInput.uniTest}
                type={formInputTypes.firstName}
                placeholder={formInputPlaceholderAndLabel.firstName}
                aria-describedby={formInputLabelId.firstNameLabelTestId}
                />

                <label data-testid={formInput.uniTest} id={formInputLabelId.lastNameLabelTestId}>
                    {formInputPlaceholderAndLabel.lastName}
                </label>
                <input 
                id={formInputLabelId.lastNameLabelTestId} 
                data-testid={formInput.uniTest} 
                type={formInputTypes.lastName} 
                placeholder={formInputPlaceholderAndLabel.lastName} 
                aria-describedby={formInputLabelId.lastNameLabelTestId}
                />
                
                <label data-testid={formInput.uniTest} id={formInputLabelId.emailLabelTestId}>
                    {formInputPlaceholderAndLabel.email}
                </label>
                <input
                id={formInputLabelId.emailLabelTestId} 
                data-testid={formInput.uniTest} 
                type={formInputTypes.email} 
                placeholder={formInputPlaceholderAndLabel.email} 
                aria-describedby={formInputLabelId.emailLabelTestId}
                />

                <label data-testid={formInput.uniTest} id={formInputLabelId.phoneNumberLabelTestId}>
                    {formInputPlaceholderAndLabel.phoneNumber}
                </label>
                <input 
                id={formInputLabelId.phoneNumberLabelTestId} 
                data-testid={formInput.uniTest} 
                type={formInputTypes.phoneNumber}
                placeholder={formInputPlaceholderAndLabel.phoneNumber}
                aria-describedby={formInputLabelId.phoneNumberLabelTestId}
                />

                <label data-testid={formInput.uniTest} id={formInputLabelId.passwordLabelTestId}>
                    {formInputPlaceholderAndLabel.password}
                </label>
                <input 
                id={formInputLabelId.passwordLabelTestId} 
                data-testid={formInput.uniTest} 
                type={formInputTypes.password}
                placeholder={formInputPlaceholderAndLabel.password}
                aria-describedby={formInputLabelId.passwordLabelTestId}
                />

                <label data-testid={formInput.uniTest} id={formInputLabelId.confirmPasswordLabelTestId}>
                    {formInputPlaceholderAndLabel.confirmPassword}
                </label>
                <input 
                id={formInputLabelId.confirmPasswordLabelTestId} 
                data-testid={formInput.uniTest} 
                type={formInputTypes.confirmPassword}
                placeholder={formInputPlaceholderAndLabel.confirmPassword}
                aria-describedby={formInputLabelId.confirmPasswordLabelTestId}
                />

                <label data-testid={formInput.uniTest} id={formInputLabelId.agreeTermsLabelTestId}>
                    {formInputPlaceholderAndLabel.agreeTerms}
                </label>
                <input 
                id={formInputLabelId.agreeTermsLabelTestId} 
                data-testid={formInput.uniTest} 
                type={formInputTypes.agreeTerms} 
                aria-describedby={formInputLabelId.agreeTermsLabelTestId}
                />
            </form>
        </>
    )
}