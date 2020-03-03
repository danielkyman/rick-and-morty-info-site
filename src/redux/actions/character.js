import axios from "axios";

import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESS,
  CHARACTERS_ERROR
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
