import React, { useState } from "react";
import Cart from "./Components/Cart";
import RouteSwitch from "./Components/RouteSwitch";
import "./Styles/App.css"


const App = () => {
  const [cartQty, setCartQty] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">
          <h1>Mock Store</h1>
        </div>

        <Cart cartQty={cartQty} setCartQty={setCartQty} />
      </header>

      <div className="MainContainer">
        <RouteSwitch cartQty={cartQty} setCartQty={setCartQty} />
      </div>

      <footer> Copyright <span>&copy;</span> ReezyTech</footer>
    </div>
  );
}

export default App;
