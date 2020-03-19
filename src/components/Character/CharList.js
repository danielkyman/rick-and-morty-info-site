import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCharacters,
  prevPage,
  nextPage,
  jumpToPage
} from "../../redux/actions/character";

import "./Character.scss";
import CharacterPageNav from "../../components/Navigation/CharacterPageNav";
import Card from "../../components/Card/Card";
import CharInfo from "./CharInfo";

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

  return (
    <div>
      <CharacterPageNav
        count={count}
        characterpage={characterpage}
        jumpToPage={jumpToPage}
        page={characterpage}
        prevPage={prevPage}
        nextPage={nextPage}
        reversed={false}
      />
      {loading ? (
        <div className="page-container"></div>
      ) : (
        <div className="page-container">
          <div className="card-container">
            {characters.map((char, index) => (
              <Card>
                <CharInfo key={index} char={char} />
              </Card>
            ))}
          </div>
        </div>
      )}
      <CharacterPageNav
        count={count}
        characterpage={characterpage}
        jumpToPage={jumpToPage}
        page={characterpage}
        prevPage={prevPage}
        nextPage={nextPage}
        reversed={true}
      />
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
