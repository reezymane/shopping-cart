import React from "react";
import Logo from "../Assets/logo.png"

const Home = () => {
    return(
        <div className="SiteInfo">
            <h2>Welcome to my Mock Store!</h2>

            <p data-testid="p1">
                The purpose of this Mock Store is to practice setting up a page and shopping cart 
                in React by routing and running tests with jest.
            </p>

            <p data-testid="p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <img src={Logo} alt="Store Logo" />
        </div> 
    );  
};

export default Home;