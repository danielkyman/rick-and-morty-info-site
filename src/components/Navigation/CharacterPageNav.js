import React from "react";
import "./PageNav.scss";

const CharacterPageNav = ({ count, jumpToPage, page }) => {
  let countArr = [];
  for (let i = 1; i <= count; i++) {
    countArr.push(i);
  }

  return (
    <div>
      {countArr.map((number, index) => (
        <span
          key={index}
          onClick={() => jumpToPage(number)}
          className={number === page ? "active-page" : undefined}
        >
          {" "}
          {number}{" "}
        </span>
      ))}
    </div>
  );
};

export default CharacterPageNav;
