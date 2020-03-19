import React from "react";
import Card from "../Card/Card";

const CharacterInfoSingle = ({
  char: {
    id,
    name,
    image,
    status,
    species,
    type,
    gender,
    origin,
    location,
    episode,
    created
  }
}) => {
  return (
    <div className="single-char-card">
      <div className="image">
        <img src={image} />
      </div>

      <div className="main-info">
        <h2>
          <em>#{id} </em>
          {name}
        </h2>
        <p>Created {Date.parse(created)}</p>
        <p>Status: {status === "Dead" ? "Deceased" : status}</p>
        <p>Home: {origin.name}</p>
        <p>Current whereabouts: {location.name}</p>
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
        <p></p>
      </div>
    </div>
  );
};

export default CharacterInfoSingle;
