import React from "react";

const CharCard = ({
  char: { name, status, species, type, origin, location, image }
}) => {
  console.log();
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} />
      <p>
        <em>{type}</em>
      </p>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Home: {origin.name}</p>
      <p>Last Whereabouts: {location.name}</p>
    </div>
  );
};

export default CharCard;
