import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const CharInfo = ({
  char: { name, status, species, type, origin, location, image, created, id }
}) => {
  const date = new Date(created);

  let size;

  return (
    <>
      <div className={`card ${size}`}>
        <div className="card-header">
          <div className="overlay">
            <div className="overlay-text">View More</div>
            <Link
              to={{ pathname: `/characters/${id}`, state: { id: id } }}
            ></Link>
          </div>
          <img src={image} />
        </div>
        <div className="name-overlay">
          <h3>{name}</h3>
        </div>
      </div>
    </>
  );
};

export default CharInfo;
