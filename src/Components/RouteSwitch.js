import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" />
                <Route path="/" />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;