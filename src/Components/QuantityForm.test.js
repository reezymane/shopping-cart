import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Quantity from "./QuantityForm";
import Watch from "../Assets/watch.png";

describe("QuantityForm component", () => {
    it("should update item quantity when input value changes", () => {
        const goldWatch = {
            name: "Gold Watch",
            img: Watch,
            price: 5200.00,
            description: "Experience elegance with this gold watch featuring a..."
        };
        
        render(<Quantity item={goldWatch} />);
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

        render(<Quantity item={goldWatch} />);
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

        render(<Quantity item={goldWatch} />);
        const incrementButton = screen.getByText("+");
        const input = screen.getByRole("textbox");

        fireEvent.change(input, { target: { value: "5" } });
        fireEvent.click(incrementButton);
    
        expect(parseInt(input.value)).toBe(6);
    });

    it('should call addToCart function and reset itemQuantity', () => {
        const setCartQty = jest.fn();
        render(<Quantity setCartQty={setCartQty} />);
        
        const quantityInput = screen.getByRole("textbox");
        const addToCartButton = screen.getByText('Add to Cart');
    
        fireEvent.change(quantityInput, { target: { value: "5" } });
        fireEvent.click(addToCartButton);
    
        expect(setCartQty).toHaveBeenCalledTimes(1);
        expect(quantityInput.value).toBe('0');
    });
});