import React from "react";

const Cart = (prop) => {
    return (
        <div className="Cart">
            <img alt="Shopping Cart" />

            <div className="CartCount">
                {prop.cartCount};
            </div>
        </div>
    );
};

export default Cart;