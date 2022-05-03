import { screen, render } from "@testing-library/react";
import ReactPage from "./ReactPage";

test('it renders react page', () => {
    render(<ReactPage/>);

    expect(screen.getByText(/React Tutorials/i)).toBeInTheDocument();
})