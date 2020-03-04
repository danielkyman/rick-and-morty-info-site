import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCharacters,
  prevPage,
  nextPage,
  jumpToPage
} from "../../redux/actions/character";

import PageNav from "../../components/Navigation/PageNav";
import CharCard from "../../components/Character/CharCard";

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

  return (
    <div>
      <PageNav count={count} jumpToPage={jumpToPage} page={page} />
      <button onClick={() => prevPage(page, count)}>Prev</button>
      <button onClick={() => nextPage(page, count)}>Next</button>
      {characters.map((char, index) => (
        <CharCard key={index} char={char} />
      ))}
    </div>
  );
};

CharList.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
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
