import React from "react";
import ShoppingCart from "../Assets/cart.png";

const Cart = (prop) => {
    return (
        <div className="Cart">
            <img src={ShoppingCart} alt="Shopping Cart" />

            <div className="CartCount" data-testid="CartCount">
                {prop.cartCount}
            </div>
        </div>
    );
};

export default Cart;