import React, { useEffect, useState, memo } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import site from "../../content/site.json";

const Navbar = () => {
  const { brand, showClock } = site.meta;
  const links = site.nav;
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [clock, setClock] = useState("");

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // live UTC mission clock
  useEffect(() => {
    if (!showClock) return undefined;
    const tick = () => setClock(new Date().toISOString().substr(11, 8) + " UTC");
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [showClock]);

  return (
    <div className="navbar_main">
      <div className="brandname">
        <NavLink to="/">
          {brand}
          <span className="band_sub">.</span>
        </NavLink>
      </div>

      <div className="nav_right">
        <ul className={menuOpen ? "menu_list menu_open" : "menu_list"}>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={({ isActive }) => (isActive ? "on" : "")}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {showClock && <div className="clock mono">{clock || "--:--:-- UTC"}</div>}

        <button
          type="button"
          className="burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>
    </div>
  );
};

export default memo(Navbar);
