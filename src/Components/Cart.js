import React from "react";
import ShoppingCart from "../Assets/cart.png";
import "../Styles/Cart.css";

const Cart = (props) => {
    return (
        <div className="Cart">
            <img src={ShoppingCart} alt="Shopping Cart" className="CartImg"/>

            <div className="CartCount" data-testid="CartCount">
                {props.cartQty}
            </div>
        </div>
    );
};

export default Cart;