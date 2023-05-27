import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Shop from "./Shop";

describe("Shop component", () => {
    test('renders the component without errors', () => {
        render(<Shop />);
        // Assert that the component renders without throwing an error
    });

    test('displays the correct number of cards', () => {
        render(<Shop />);
        const cards = screen.getAllByTestId('item-card');
        expect(cards.length).toBe(2);
        // Assert that the component renders the correct number of cards based on the items array
    });
});