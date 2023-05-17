import React from "react";
import Cart from "./Components/Cart";

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

        {/*<Nav />*/}
      </header>

      <div className="MainContainer">
        
      </div>

      <footer> Copyright <span>&copy;</span> ReezyTech</footer>
    </div>
  );
}

export default App;
