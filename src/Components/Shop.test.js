import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Shop from "./Shop";

describe("Shop component", () => {
    test('renders the component without errors', () => {
        render(<Shop />);
        // Assert that the component renders without throwing an error
    });
});