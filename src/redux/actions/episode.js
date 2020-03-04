import axios from "axios";

import {
  GET_EPISODES_START,
  GET_EPISODES_SUCCESS,
  EPISODES_ERROR,
  PREV_PAGE,
  NEXT_PAGE,
  JUMP_TO_PAGE
} from "./types";

export const getEpisodes = page => dispatch => {
  try {
    dispatch({
      type: GET_EPISODES_START
    });
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
      .then(res => {
        {
          dispatch({ type: GET_EPISODES_SUCCESS, payload: res.data });
        }
      });
  } catch (error) {
    dispatch({
      type: EPISODES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

export const nextPage = (episodepage, count) => dispatch => {
  if (episodepage < count)
    dispatch({ type: NEXT_PAGE, payload: episodepage + 1 });
};

export const prevPage = (episodepage, count) => dispatch => {
  if (episodepage > 1) dispatch({ type: PREV_PAGE, payload: episodepage - 1 });
};

export const jumpToPage = newPage => dispatch => {
  dispatch({ type: JUMP_TO_PAGE, payload: newPage });
};
