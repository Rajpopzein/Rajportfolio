import React, { useState, useContext, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import rocket from "./assets/rocket-spaceship.png";
import airdrop from "./assets/air-delivery.png";
import {easeOut, motion } from "framer-motion";
import handshake from "./assets/rocket_launch_24dp_FILL0_wght400_GRAD0_opsz24.svg";

function App({children}) {
  
  return (
    <div>
      <nav className="main">
        <Navbar />
      </nav>
      <main>
        {children}
      </main>
      <footer className="footer">
            <div className="main footermain">
              <h1 className="footer_head">Thanks for visiting!</h1>
              <h6 className="footer_subp">
                Got questions, comments, or feedback?
                <br />
                Feel free to reach out and contact me.
              </h6>
            </div>
          </footer>
    </div>
  );
}

export default App;
