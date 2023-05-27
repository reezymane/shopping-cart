import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Shop from "./Shop";
import Card from "./Card";

describe("Card component", () => {
    test('displays item information correctly', () => {
        render(<Shop />);
        const cards = screen.getAllByTestId('item-card');
    
        // Assert that the card displays the correct item name
        expect(cards[0]).toHaveTextContent('Gold Watch');
        expect(cards[1]).toHaveTextContent('Emerald Necklace');
    
        // Assert that the card displays the correct item price
        expect(cards[0]).toHaveTextContent('Price: $5200.00');
        expect(cards[1]).toHaveTextContent('Price: $7500.00');
    
        // Assert that the card displays the correct item description
        expect(cards[0]).toHaveTextContent('Experience elegance with this gold watch');
        expect(cards[1]).toHaveTextContent('Adorn yourself with a captivating emerald necklace');
      });
});