import React from "react";
import "./Card.scss";

const Card = props => {
  const margin = props.margin;
  const size = props.size ? props.size : "";
  return <div className={`card ${size} ${margin}`}>{props.children}</div>;
};

export default Card;
