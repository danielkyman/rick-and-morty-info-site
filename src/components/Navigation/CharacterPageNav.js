import React from "react";
import "./PageNav.scss";

const CharacterPageNav = ({
  count,
  jumpToPage,
  page,
  prevPage,
  nextPage,
  characterpage
}) => {
  let countArr = [];
  for (let i = 1; i <= count; i++) {
    countArr.push(i);
  }

  return (
    <div className="pagination">
      <div className="numbers">
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
      <div className="next-prev">
        <button onClick={() => prevPage(characterpage, count)}>Prev</button>
        <button onClick={() => nextPage(characterpage, count)}>Next</button>
      </div>
    </div>
  );
};

export default CharacterPageNav;
