import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESS,
  CHARACTERS_ERROR,
  NEXT_PAGE_CHARACTER,
  PREV_PAGE_CHARACTER,
  JUMP_TO_PAGE_CHARACTER
} from "../actions/types";

const initialState = {
  characters: [],
  characterpage: 1,
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

    case PREV_PAGE_CHARACTER:
    case NEXT_PAGE_CHARACTER:
    case JUMP_TO_PAGE_CHARACTER: {
      return {
        ...state,
        characterpage: payload
      };
    }
    default:
      return state;
  }
}
