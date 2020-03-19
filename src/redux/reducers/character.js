import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESS,
  CHARACTERS_ERROR,
  NEXT_PAGE_CHARACTER,
  PREV_PAGE_CHARACTER,
  JUMP_TO_PAGE_CHARACTER,
  GET_SINGLE_CHAR_START,
  GET_SINGLE_CHAR_SUCCESS
} from "../actions/types";

const initialState = {
  characters: [],
  characterpage: 1,
  character: {},
  pageCount: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTERS_START:
    case GET_SINGLE_CHAR_START:
      console.log("starting");
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

    case GET_SINGLE_CHAR_SUCCESS:
      return {
        ...state,
        loading: false,
        character: payload
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
