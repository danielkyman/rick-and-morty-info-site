import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESS,
  CHARACTERS_ERROR,
  NEXT_PAGE,
  PREV_PAGE,
  JUMP_TO_PAGE
} from "../actions/types";

const initialState = {
  characters: [],
  page: 1,
  character: null,
  pageCount: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTERS_START:
      return {
        ...state,
        loading: true,
        error: ""
      };

    case GET_CHARACTERS_SUCCESS:
      console.log(payload.results);
      return {
        ...state,
        characters: payload.results,
        pageCount: payload.info.pages,
        loading: false
      };
    case CHARACTERS_ERROR: {
      return {
        ...state,
        error: payload,
        loading: false
      };
    }

    case PREV_PAGE:
    case NEXT_PAGE:
    case JUMP_TO_PAGE: {
      return {
        ...state,
        page: payload
      };
    }
    default:
      return state;
  }
}
