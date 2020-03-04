import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCharacters,
  prevPage,
  nextPage,
  jumpToPage
} from "../../redux/actions/character";

import PageNav from "../../components/Navigation/PageNav";
const CharList = ({
  getCharacters,
  loading,
  characters,
  count,
  page,
  prevPage,
  nextPage,
  jumpToPage
}) => {
  useEffect(() => {
    getCharacters(page);
  }, [page]);

  if (loading) {
    return <h3>Loading Cards...</h3>;
  }

  const previous = page => {
    if (page > 1) prevPage(page);
    console.log(page);
  };

  const next = page => {
    if (page < count) nextPage(page);
    console.log(page);
  };

  return (
    <div>
      <PageNav count={count} jumpToPage={jumpToPage} page={page} />
      <button onClick={() => prevPage(page, count)}>Prev</button>
      <button onClick={() => nextPage(page, count)}>Next</button>
      {characters.map((char, index) => (
        <h2 key={index}>{char.name}</h2>
      ))}
    </div>
  );
};

CharList.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  jumpToPage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  characters: state.character.characters,
  loading: state.character.loading,
  count: state.character.pageCount,
  page: state.character.page
});
export default connect(mapStateToProps, {
  getCharacters,
  prevPage,
  nextPage,
  jumpToPage
})(CharList);
