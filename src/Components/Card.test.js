import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Card from "./Card";
import Watch from "../Assets/watch.png";

describe("Card component", () => {
    it("displays item information correctly", () => {
        const goldWatch = {
            name: "Gold Watch",
            img: Watch,
            price: 5200.00,
            description: "Experience elegance with this gold watch featuring a..."
        };

        render(<Card item={goldWatch}/>);
        const card = screen.getByTestId('item-card');
    
        // Assert that the card displays the correct item name
        expect(card).toHaveTextContent('Gold Watch');
    
        // Assert that the card displays the correct item price
        expect(card).toHaveTextContent('Price: $5200.00');
    
        // Assert that the card displays the correct item description
        expect(card).toHaveTextContent('Experience elegance with this gold watch');
    });
});