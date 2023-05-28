import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import RouteSwitch from "./RouteSwitch";

describe("Nav component", () => {
    it('renders Nav component correctly', () => {
        render(<RouteSwitch />);
        
        const homeLink = screen.getByText('Home');
        const shopLink = screen.getByText('Shop');
        
        expect(homeLink).toBeInTheDocument();
        expect(shopLink).toBeInTheDocument();
    });
});