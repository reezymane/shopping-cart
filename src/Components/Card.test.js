import { render, screen, fireEvent } from "@testing-library/react";
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

    it("should update item quantity when input value changes", () => {
        const goldWatch = {
            name: "Gold Watch",
            img: Watch,
            price: 5200.00,
            description: "Experience elegance with this gold watch featuring a..."
        };
        
        render(<Card item={goldWatch} />);
        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: "5" } });
    
        expect(input.value).toBe("5");
    });

    it("should decrease item quantity when decrement button is clicked", () => {
        const goldWatch = {
            name: "Gold Watch",
            img: Watch,
            price: 5200.00,
            description: "Experience elegance with this gold watch featuring a..."
        };

        render(<Card item={goldWatch} />);
        const decrementButton = screen.getByText("-");
        const input = screen.getByRole("textbox");

        fireEvent.change(input, { target: { value: "5" } });
        fireEvent.click(decrementButton);
    
        expect(parseInt(input.value)).toBe(4);
      });

      it("should increase item quantity when increment button is clicked", () => {
        const goldWatch = {
            name: "Gold Watch",
            img: Watch,
            price: 5200.00,
            description: "Experience elegance with this gold watch featuring a..."
        };

        render(<Card item={goldWatch} />);
        const incrementButton = screen.getByText("+");
        const input = screen.getByRole("textbox");

        fireEvent.change(input, { target: { value: "5" } });
        fireEvent.click(incrementButton);
    
        expect(parseInt(input.value)).toBe(6);
      });
});