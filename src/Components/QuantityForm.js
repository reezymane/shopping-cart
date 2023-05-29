import React, { useState } from "react";

const Quantity = (props) => {
    const [itemQuantity, setItemQuantity] = useState(0);
    
    const handleQtyChange = (event) => {
        const numToStore = parseInt(event.target.value);

        if (typeof numToStore === "number" && !isNaN(numToStore)) {
            setItemQuantity(numToStore);
        } else {
            setItemQuantity(0);
        }
    };

    const decrementQty = () => {
        if (itemQuantity > 0) {
            setItemQuantity(prevItemQuantity => prevItemQuantity - 1);
        };
    };

    const incrementQty = () => {
        setItemQuantity(prevItemQuantity => prevItemQuantity + 1);
    };

    return (
        <form className="itemQty">
            <label htmlFor="qty">Quantity:</label><br />

            <button type="button" onClick={decrementQty}>
                -
            </button>

            <input
             type="text"
             id="qty"
             onChange={handleQtyChange}
             value={itemQuantity}
            /><br />

            <button type="button" onClick={incrementQty}>
                +
            </button><br />

            <button type="submit">Add to Cart</button>
        </form>
    );
};

export default Quantity;