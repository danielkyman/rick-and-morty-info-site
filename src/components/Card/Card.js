import React from "react";
import "./Card.scss";

const Card = props => {
  const size = props.size ? props.size : "";
  return <div className={`card ${size}`}>{props.children}</div>;
};

export default Card;
