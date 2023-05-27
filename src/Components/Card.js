import React from "react";

const Card = (props) => {
    return (
        <div className="Card" data-testid="item-card">
            <h3>{props.item.name}</h3>
            <img src={props.item.img} alt={props.item.name} />
            <p>Price: ${props.item.price.toFixed(2)}</p>
            <p>{props.item.description}</p>
        </div> 
    );
};

export default Card;