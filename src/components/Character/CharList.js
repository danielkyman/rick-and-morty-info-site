import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCharacters,
  prevPage,
  nextPage,
  jumpToPage
} from "../../redux/actions/character";

import CharacterPageNav from "../../components/Navigation/CharacterPageNav";
import CharCard from "../../components/Character/CharCard";

const CharList = ({
  getCharacters,
  loading,
  characters,
  count,
  characterpage,
  prevPage,
  nextPage,
  jumpToPage
}) => {
  useEffect(() => {
    getCharacters(characterpage);
  }, [characterpage]);

  if (loading) {
    return <h3>Loading Cards...</h3>;
  }

  return (
    <div>
      <CharacterPageNav
        count={count}
        jumpToPage={jumpToPage}
        page={characterpage}
      />
      <button onClick={() => prevPage(characterpage, count)}>Prev</button>
      <button onClick={() => nextPage(characterpage, count)}>Next</button>
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
  characterpage: state.character.characterpage
});
export default connect(mapStateToProps, {
  getCharacters,
  prevPage,
  nextPage,
  jumpToPage
})(CharList);
