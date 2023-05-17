import React from "react";
import Cart from "./Components/Cart";
import RouteSwitch from "./Components/RouteSwitch";


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="TitleAndCart">
          <div className="Title">
            <h1>Mock Store</h1>
          </div>

          <Cart />
        </div>
      </header>

      <div className="MainContainer">
        <RouteSwitch />
      </div>

      <footer> Copyright <span>&copy;</span> ReezyTech</footer>
    </div>
  );
}

export default App;
