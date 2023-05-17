import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Cart from "./Cart";

describe ("Cart component", () => {
    it("renders the correct image with the expected src", () => {
        render(<Cart />);

        const imgElement = screen.getByRole("img");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", "../Assets/shopping-cart.png");
    });
});