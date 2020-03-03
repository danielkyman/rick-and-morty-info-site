import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCharacters } from "../../redux/actions/character";

const CharList = ({ getCharacters, loading, characters, count }) => {
  const [page, setPage] = useState(25);
  useEffect(() => {
    getCharacters(page);
  }, [page]);

  console.log(characters);
  console.log(count);

  if (loading) {
    return <h3>Loading Cards...</h3>;
  }

  const previous = () => (page > 1 ? setPage(page - 1) : setPage(page));

  const next = () => (page < count ? setPage(page + 1) : setPage(page));

  return (
    <div>
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
      {characters.map((char, index) => (
        <h2 key={index}>{char.name}</h2>
      ))}
    </div>
  );
};

CharList.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  characters: state.character.characters,
  loading: state.character.loading,
  count: state.character.pageCount
});
export default connect(mapStateToProps, { getCharacters })(CharList);
