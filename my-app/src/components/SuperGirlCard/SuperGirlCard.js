import React from "react";
import "./SuperGirlCard.css";

const SuperGirlCard = props => (
  <div className="card">
    <div className="img-container zoom">
      <img
        onClick={() => props.handleClick(props.id)}
        alt={props.name}
        src={props.image}
      />
    </div>
  </div>
);

export default SuperGirlCard;
