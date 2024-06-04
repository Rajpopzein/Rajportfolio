import React, { useState, useContext, useEffect, useRef } from "react";
import "./App.css";
import Component from "./component/contextprovider";
import Navbar from "./component/Navbar";
import rocket from "./assets/rocket-spaceship.png";
import airdrop from "./assets/air-delivery.png";
import { animate, easeOut, motion } from "framer-motion";
import handshake from "./assets/rocket_launch_24dp_FILL0_wght400_GRAD0_opsz24.svg";

function App({ props }) {
  const projects = [
    {
      name: "Hello alfred",
      description: "Get assist with docters within seconds ",
      Platform: "React js, Switft, Native Android, Python",
    }
    
  ];

  return (
    <div>
      <nav className="main">
        <Navbar />
      </nav>
      <main>
        <div className="Lander_page main">
          <div>
            <motion.div
              initial={{ x: "-10%", opacity: 0 }}
              animate={{
                x: "0%",
                opacity: 1,
                transition: {
                  ease: easeOut,
                  delay: 0.1,
                },
              }}
            >
              <h1 className="intro_tag">
                <span className="intor_hisapn">Hi there. </span>I’m Rajkumar, a
                Fullstack Developer and Content Creater.
              </h1>
              <h5 className="subtab">
                A Developer who likes to build interactive things with code.
              </h5>
              <motion.a className="btn_available">
                {/* <span className="material-symbols-outlined handshake_img">rocket_launch</span> */}
                <img src={handshake} className="handshake_img"/>
                <span>Available For New Project</span>
              </motion.a>
              <p className="minar_insp">let's broaden our connections</p>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ x: "15%", opacity: 0 }}
              animate={{
                x: "10%",
                opacity: 1,
                transition: {
                  ease: easeOut,
                  delay: 0.1,
                },
              }}
            >
              <img className="rocket_image" src={rocket} />
            </motion.div>
          </div>
        </div>
        <div className="project main">
          <div>
            <h2 className="primary_color">Highlighted Projects</h2>
            <h2 className="project_head">What I've been working on</h2>
            {/* <img className="airdrop" src={airdrop}/> */}
            <div className="project_list">
              {projects.map((pro, index) => (
                <div className="project_card" key={index}>
                  <h6 className="strong">{pro.name}</h6>
                  <p className="card_content">{pro.description}</p>
                  <h6 className="card_platform">{pro.Platform}</h6>
                  <a className="View_btn">View</a>
                </div>
              ))}
            </div>
          </div>
        </div>
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
