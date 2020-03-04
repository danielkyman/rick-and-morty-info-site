import React from "react";
import "./PageNav.scss";

const PageNav = ({ count, jumpToPage, page }) => {
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
          className={number === page && "active-page"}
        >
          {" "}
          {number}{" "}
        </span>
      ))}
    </div>
  );
};

export default PageNav;
