import React, { useState } from "react";

const Card = (props) => {
    const [itemQuantity, setItemQuantity] = useState(0);
    
    const handleQtyChange = (event) => {
        setItemQuantity(event.target.value);
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
        <div className="Card" data-testid="item-card">
            <h3>{props.item.name}</h3>
            <img src={props.item.img} alt={props.item.name} />
            <p>Price: ${props.item.price.toFixed(2)}</p>

            <form className="itemQty">
                <label htmlFor="qty">Quantity:</label><br />

                <button type="button" onClick={decrementQty}>
                    -
                </button>

                <input
                 type="number"
                 id="qty"
                 onChange={handleQtyChange}
                 value={itemQuantity}
                /><br />

                <button type="button" onClick={incrementQty}>
                    +
                </button><br />

                <button type="submit">Add to Cart</button>
            </form>

            <p>{props.item.description}</p>
        </div> 
    );
};

export default Card;