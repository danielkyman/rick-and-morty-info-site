import axios from "axios";

import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESS,
  CHARACTERS_ERROR,
  PREV_PAGE_CHARACTER,
  NEXT_PAGE_CHARACTER,
  JUMP_TO_PAGE_CHARACTER
} from "./types";

export const getCharacters = page => dispatch => {
  console.log(page);
  try {
    dispatch({
      type: GET_CHARACTERS_START
    });
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        console.log(res);
        {
          dispatch({ type: GET_CHARACTERS_SUCCESS, payload: res.data });
        }
      });
  } catch (error) {
    dispatch({
      type: CHARACTERS_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

export const nextPage = (characterpage, count) => dispatch => {
  console.log("working");
  if (characterpage < count)
    dispatch({ type: NEXT_PAGE_CHARACTER, payload: characterpage + 1 });
};

export const prevPage = (characterpage, count) => dispatch => {
  if (characterpage > 1)
    dispatch({ type: PREV_PAGE_CHARACTER, payload: characterpage - 1 });
};

export const jumpToPage = newPage => dispatch => {
  dispatch({ type: JUMP_TO_PAGE_CHARACTER, payload: newPage });
};
