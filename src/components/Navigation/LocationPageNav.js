import React from "react";

const LocationPageNav = ({ count, jumpToPage, page }) => {
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

export default LocationPageNav;
