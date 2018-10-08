import React from "react";
import "./Title.css";

const Title = props => (
  <div className="title">
    <h1>Memory Game</h1>
    <p>
      {" "}
      Click on an image to add points, click more than once on the same image
      and you lose the game...
    </p>
  </div>
);

export default Title;
