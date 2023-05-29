import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";

const RouteSwitch = (props) => {
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/shop" element={<Shop cartQty={props.cartQty} setCartQty={props.setCartQty} />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;