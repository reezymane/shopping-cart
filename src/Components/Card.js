import React, { useState } from "react";

const Card = (props) => {
    const [itemQuantity, setItemQuantity] = useState(0);
    
    return (
        <div className="Card" data-testid="item-card">
            <h3>{props.item.name}</h3>
            <img src={props.item.img} alt={props.item.name} />
            <p>Price: ${props.item.price.toFixed(2)}</p>

            <form className="itemQty">
                <label htmlFor="qty">Quantity:</label><br />

                <button type="button">-</button>

                <input
                 type="number"
                 id="qty"
                 value={itemQuantity}
                /><br />

                <button type="button">+</button><br />

                <button type="submit">Add to Cart</button>
            </form>

            <p>{props.item.description}</p>
        </div> 
    );
};

export default Card;