import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Cart from "./Cart";
import ShoppingCart from "../Assets/cart.png";

describe ("Cart component", () => {
    it("renders the correct image with the expected src", () => {
        render(<Cart />);

        const imgElement = screen.getByRole("img");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", ShoppingCart);
    });

    it("renders prop value correctly", () => {
        const cartCount = "0";
        render(<Cart cartCount={cartCount} />);

        expect(screen.getByTestId("CartCount").textContent).toMatch("0");
    });
});