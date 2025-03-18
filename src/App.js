import React, { useState, useContext, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import ChatbotScreen from "./component/chatbot_screen/ChatbotScreen";

function App({children}) {
  const [chat_trigger, setChat_trigger] = useState(false)
  return (
    <div>
      <nav className="main">
        <Navbar />
      </nav>
      <main className="main_page">
        {children}
        {/* <ChatbotScreen trigger={chat_trigger}/>
        <div className="chatbot_btn" onClick={()=>{
          setChat_trigger(!chat_trigger)
        }}>
            <FontAwesomeIcon className="headhone" icon={faHeadset}/>
        </div> */}
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
