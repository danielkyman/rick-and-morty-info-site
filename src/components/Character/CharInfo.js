import React from "react";

const CharInfo = ({
  char: { name, status, species, type, origin, location, image }
}) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image} />
      <p>
        <em>{type}</em>
      </p>
      <div>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Home: {origin.name}</p>
        <p>Last Whereabouts: {location.name}</p>
      </div>
    </>
  );
};

export default CharInfo;
