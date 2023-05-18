import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Home from "./Home";

describe("Home component", () => {
    it("renders the correct site info heading", () => {
        render(<Home />)
        expect(screen.getByRole("heading", {level: 2}).textContent).toMatch(/welcome to my mock store!/i);
    });

    it("renders the correct paragraph and content", () => {
        render(<Home />)
        expect(screen.getByTestId("p1").textContent).toMatch("The purpose of this Mock Store is to practice setting up a page and shopping cart in React by routing and running tests with jest.");
        expect(screen.getByTestId("p2").textContent).toMatch("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    });
});