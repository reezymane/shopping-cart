import React, { useState } from "react";
import Cart from "./Components/Cart";
import RouteSwitch from "./Components/RouteSwitch";


const App = () => {
  const [cartQty, setCartQty] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="TitleAndCart">
          <div className="Title">
            <h1>Mock Store</h1>
          </div>

          <Cart cartQty={cartQty} setCartQty={setCartQty} />
        </div>
      </header>

      <div className="MainContainer">
        <RouteSwitch cartQty={cartQty} setCartQty={setCartQty} />
      </div>

      <footer> Copyright <span>&copy;</span> ReezyTech</footer>
    </div>
  );
}

export default App;
