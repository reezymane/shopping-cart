import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Home from "./Home";

describe("Home component", () => {
    it("renders the correct site info heading", () => {
        render(<Home />)
        
    });
});