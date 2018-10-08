import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <ul>
      <li id="date">{new Date().toLocaleDateString()}</li>
      <li id="guessed">{props.guessed}</li>
      <li id="score">Score: {props.score}</li>
      <li id="topScore">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Navbar;
