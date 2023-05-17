import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
    it("renders correct site title", () => {
        render(<App />);
        expect(screen.getByRole("heading", {level: 1}).textContent).toMatch(/mock store/i);
    });
});