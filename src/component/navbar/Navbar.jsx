import React, { useRef, useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const refForAnimation = useRef(null);
  const [activeIcon, setActiveIcon] = useState(true);
  const route = useNavigate();
  const handleIconClick = () => {
    if (refForAnimation.current) {
      if (!activeIcon) {
        console.warn("inside");
        refForAnimation.current.classList.remove("activeMenuList");
      } else {
        refForAnimation.current.classList.add("activeMenuList");
      }
    }
    console.trace("icon handling", refForAnimation.current.classList);
  };

  return (
    <div className="navbar_main">
      <div className="brandname">
        <a href="/">
          rajkumar<span className="band_sub">.</span>
        </a>
      </div>
      <div>
        <ul className="menu_list" ref={refForAnimation}>
          <li
            onClick={() => {
              route("/");
            }}
          >
            <a href="/">Work</a>
          </li>
          <li
            onClick={() => {
              route("/about");
            }}
          >
            <a href="/about">About</a>
          </li>
          {/* <li><a href='/contact'>Contact</a></li> */}
        </ul>
        {activeIcon ? (
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setActiveIcon(!activeIcon);
              handleIconClick();
            }}
            className="hidden_item burgerIcon"
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => {
              setActiveIcon(!activeIcon);
              handleIconClick();
            }}
            className="hidden_item xIcon"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
