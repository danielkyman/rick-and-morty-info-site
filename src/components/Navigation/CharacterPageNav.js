import React, { useState } from "react";
import "./PageNav.scss";

const CharacterPageNav = ({
  count,
  jumpToPage,
  page,
  prevPage,
  nextPage,
  characterpage,
  reversed
}) => {
  let countArr = [];
  for (let i = 1; i <= count; i++) {
    countArr.push(i);
  }

  return (
    <div className="pagination">
      {reversed ? (
        <div className="next-prev">
          <button onClick={() => prevPage(characterpage, count)}>Prev</button>
          <button onClick={() => nextPage(characterpage, count)}>Next</button>
        </div>
      ) : null}
      <div className={reversed ? `numbers numbers-reversed` : "numbers"}>
        {countArr.map((number, index) => (
          <span
            key={index}
            onClick={() => jumpToPage(number)}
            className={`page-number ${number === page ? "active" : undefined}`}
          >
            {" "}
            {number}{" "}
          </span>
        ))}
      </div>

      {!reversed ? (
        <div className="next-prev">
          <button onClick={() => prevPage(characterpage, count)}>Prev</button>
          <button onClick={() => nextPage(characterpage, count)}>Next</button>
        </div>
      ) : null}
    </div>
  );
};

export default CharacterPageNav;
