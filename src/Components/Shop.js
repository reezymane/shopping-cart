import React, { useState } from "react";
import Watch from "../Assets/watch.png";
import Necklace from "../Assets/necklace.png";
import Card from "./Card";

const Shop = (props) => {
    const [goldWatch] = useState({
        name: "Gold Watch",
        img: Watch,
        price: 5200.00,
        description: "Experience elegance with this gold watch featuring a meticulously crafted watch band, exuding sophistication and comfort. The intricate detailing accentuates its luxurious appeal. Complete with a stylish date dial, this timepiece seamlessly blends classic design with modern functionality. A statement accessory that effortlessly enhances any attire."
    });

    const [emeraldNecklace] = useState({
        name: "Emerald Necklace",
        img: Necklace,
        price: 7500.00,
        description: "Adorn yourself with a captivating emerald necklace that exudes timeless beauty. The exquisite emerald gemstone, encased in a delicate pendant, radiates elegance and allure. Paired with a graceful chain, this necklace effortlessly captures attention and adds a touch of sophistication to any ensemble. A stunning piece that embodies luxury and grace."
    });

    const items = [goldWatch, emeraldNecklace];

    return (
        <div>
            {items.map((item, index) => (
                <Card key={index} item={item} cartQty={props.cartQty} setCartQty={props.setCartQty} />
            ))}
        </div>
    );
};

export default Shop;