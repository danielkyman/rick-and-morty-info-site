import axios from "axios";

import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESS,
  CHARACTERS_ERROR,
  PREV_PAGE,
  NEXT_PAGE,
  JUMP_TO_PAGE
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

export const nextPage = (page, count) => dispatch => {
  console.log("working");
  if (page < count) dispatch({ type: NEXT_PAGE, payload: page + 1 });
};

export const prevPage = (page, count) => dispatch => {
  if (page > 1) dispatch({ type: PREV_PAGE, payload: page - 1 });
};

export const jumpToPage = newPage => dispatch => {
  dispatch({ type: JUMP_TO_PAGE, payload: newPage });
};
