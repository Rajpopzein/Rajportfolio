import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const refForAnimation = useRef(null);
  const [activeIcon, setActiveIcon] = useState(true);
  const [activeMenu, setActiveMenu] = useState("/");
  const location = useLocation();
  const route = useNavigate();

  const handleIconClick = () => {
    if (refForAnimation.current) {
      if (!activeIcon) {
        refForAnimation.current.classList.remove("activeMenuList");
        refForAnimation.current.classList.add("deActiveAnmination");
      } else {
        refForAnimation.current.classList.remove("deActiveAnmination");
        refForAnimation.current.classList.add("activeMenuList");
      }
    }
    console.trace("icon handling", refForAnimation.current.classList);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveMenu("/");
      refForAnimation.current.classList.remove("deActiveAnmination");
    } else if (location.pathname === "/about") {
      setActiveMenu("/about");
    } else if (location.pathname === "/contact") {
      setActiveMenu("/contact");
    }
  }, []);

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
            className={activeMenu === '/' ? "active" : ""}
          >
            <a href="/">Work</a>
          </li>
          <li
            onClick={() => {
              route("/about");
            }}
            className={activeMenu === '/about' ? "active" : ""}
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
