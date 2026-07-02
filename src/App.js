import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Starfield from "./component/starfield/Starfield";
import site from "./content/site.json";

function App({ children }) {
  const { footer } = site;
  return (
    <div className="app_shell">
      <Starfield />
      <div className="stage">
        <nav className="main">
          <Navbar />
        </nav>
        <main className="main_page">{children}</main>
        <footer className="main">
          <div className="transmission">
            <span className="eyebrow">{footer.eyebrow}</span>
            <h2 className="transmission_head">{footer.heading}</h2>
            <p className="transmission_text">{footer.text}</p>
            <div className="transmission_sign mono">{footer.sign}</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
