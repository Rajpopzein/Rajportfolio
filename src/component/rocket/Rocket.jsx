import React from "react";
import "./rocket.css";

// Hand-built SVG rocket for the hero — replaces the old raster image.
// The exhaust flame flickers continuously and drifting sparks fall from the
// nozzle; the `launching` class (added by the parent) intensifies both.
const Rocket = ({ className = "" }) => (
  <svg
    className={`rocket_svg ${className}`}
    viewBox="0 0 220 372"
    role="img"
    aria-label="Rocket"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="rk_body" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#b7b1d6" />
        <stop offset="0.45" stopColor="#f4f1ff" />
        <stop offset="1" stopColor="#a49fca" />
      </linearGradient>
      <linearGradient id="rk_nose" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ff7d3b" />
        <stop offset="1" stopColor="#ffab52" />
      </linearGradient>
      <linearGradient id="rk_fin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffab52" />
        <stop offset="1" stopColor="#ff7d3b" />
      </linearGradient>
      <linearGradient id="rk_band" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#7c5fd6" />
        <stop offset="0.5" stopColor="#a78bfa" />
        <stop offset="1" stopColor="#6d51c4" />
      </linearGradient>
      <linearGradient id="rk_nozzle" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#5a5470" />
        <stop offset="1" stopColor="#2b2740" />
      </linearGradient>
      <radialGradient id="rk_window" cx="0.4" cy="0.35" r="0.75">
        <stop offset="0" stopColor="#d6fffb" />
        <stop offset="0.55" stopColor="#61e8e1" />
        <stop offset="1" stopColor="#2b8f89" />
      </radialGradient>
      <linearGradient id="rk_flame" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffd166" />
        <stop offset="0.45" stopColor="#ff9e45" />
        <stop offset="1" stopColor="#ff5a2b" />
      </linearGradient>
      <linearGradient id="rk_flame_core" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#ffdf7e" />
      </linearGradient>
    </defs>

    {/* exhaust — drawn first so it sits behind the nozzle */}
    <g className="rocket_flame">
      <path className="rocket_flame_outer" d="M88,256 C82,302 100,346 110,366 C120,346 138,302 132,256 Z" fill="url(#rk_flame)" />
      <path className="rocket_flame_core" d="M98,256 C95,290 105,316 110,334 C115,316 125,290 122,256 Z" fill="url(#rk_flame_core)" />
    </g>
    <g className="rocket_sparks" fill="#ffb75e">
      <circle className="rocket_spark s1" cx="98" cy="306" r="3.2" />
      <circle className="rocket_spark s2" cx="124" cy="300" r="2.6" />
      <circle className="rocket_spark s3" cx="110" cy="318" r="2.4" />
      <circle className="rocket_spark s4" cx="104" cy="296" r="2" />
    </g>

    {/* fins */}
    <path d="M76,200 L40,258 C38,264 47,266 55,261 L84,230 Z" fill="url(#rk_fin)" />
    <path d="M144,200 L180,258 C182,264 173,266 165,261 L136,230 Z" fill="url(#rk_fin)" />

    {/* nozzle */}
    <path d="M92,234 L128,234 L122,258 L98,258 Z" fill="url(#rk_nozzle)" />

    {/* body */}
    <path
      d="M74,104 L146,104 C153,152 153,200 144,238 L76,238 C67,200 67,152 74,104 Z"
      fill="url(#rk_body)"
    />
    {/* nose cone */}
    <path d="M110,26 C127,48 140,76 146,104 L74,104 C80,76 93,48 110,26 Z" fill="url(#rk_nose)" />

    {/* accent band */}
    <path d="M72,182 L148,182 L146,204 L74,204 Z" fill="url(#rk_band)" />

    {/* window */}
    <circle cx="110" cy="146" r="26" fill="#211a3f" />
    <circle cx="110" cy="146" r="22" fill="url(#rk_window)" />
    <ellipse cx="101" cy="138" rx="8" ry="5" fill="#ffffff" opacity="0.6" />
  </svg>
);

export default Rocket;
