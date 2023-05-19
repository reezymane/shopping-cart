import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Nav from "./Nav";

describe("Nav component", () => {
    it("renders correct text for links", () => {
        render(<Nav />);
        const links = screen.getAllByRole("listitem");
        expect(links[0].textContent).toMatch(/home/i);
    });
});