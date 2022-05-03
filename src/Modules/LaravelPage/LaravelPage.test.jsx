import { screen, render } from "@testing-library/react";
import LaravelPage from "./LaravelPage";

test('it renders laravel page component', () => {
    render(<LaravelPage/>);

    expect(screen.getByText(/Laravel Tutorial/i)).toBeInTheDocument();
})