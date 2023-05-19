import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div className="NavBar">
          <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>  
        </div>
        
    );
};

export default Nav;