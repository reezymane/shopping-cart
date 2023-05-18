import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Home from "./Home";

describe("Home component", () => {
    it("renders the correct site info heading", () => {
        render(<Home />)
        expect(screen.getByRole("heading", {level: 2}).textContent).toMatch(/welcome to my mock store!/i);
    });
});