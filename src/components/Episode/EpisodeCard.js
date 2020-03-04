import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EpisodeCard.scss";

const EpisodeCard = ({
  episode: { name, air_date, episode, characters, url }
}) => {
  const [list, setList] = useState([]);

  const characterList = characters.map(
    character => character.split("character/")[1]
  );

  const urlAppend = characterList.join(",");

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${urlAppend}`
      )
      .then(res => setList(res.data));
  }, []);

  return (
    <div>
      <h2>{episode}</h2>
      <p>{name}</p>
      <p>Date Aired: {air_date}</p>
      <div>
        <p>
          Characters:{" "}
          {list.map(character => (
            <img src={character.image} className="small-img" />
          ))}
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;
