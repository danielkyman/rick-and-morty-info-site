import axios from "axios";

import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_SUCCESS,
  LOCATIONS_ERROR,
  PREV_PAGE_LOCATION,
  NEXT_PAGE_LOCATION,
  JUMP_TO_PAGE_LOCATION
} from "./types";

export const getLocations = page => dispatch => {
  try {
    dispatch({
      type: GET_LOCATIONS_START
    });
    axios
      .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
      .then(res => {
        console.log(res.data);
        {
          dispatch({ type: GET_LOCATIONS_SUCCESS, payload: res.data });
        }
      });
  } catch (error) {
    dispatch({
      type: LOCATIONS_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

export const nextPage = (locationpage, count) => dispatch => {
  if (locationpage < count)
    dispatch({ type: NEXT_PAGE_LOCATION, payload: locationpage + 1 });
};

export const prevPage = (locationpage, count) => dispatch => {
  if (locationpage > 1)
    dispatch({ type: PREV_PAGE_LOCATION, payload: locationpage - 1 });
};

export const jumpToPage = newPage => dispatch => {
  dispatch({ type: JUMP_TO_PAGE_LOCATION, payload: newPage });
};
