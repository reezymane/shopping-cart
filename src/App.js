import React from "react";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="TitleAndCart">
          <div className="Title">
            <h1>Mock Store</h1>
          </div>

          {/*<Cart />*/}
        </div>

        {/*<Nav />*/}
      </header>

      <div className="MainContainer">
        <div className="SiteInfo">
          <h2>Welcome to my Mock Store!</h2>
          <p></p>
        </div>

        <div className="Logo">
          <img alt="Website Logo"/>
        </div>
      </div>

      <footer> Copyright <span>&copy;</span> ReezyTech</footer>
    </div>
  );
}

export default App;
