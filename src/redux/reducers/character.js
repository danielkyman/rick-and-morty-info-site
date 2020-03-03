import {
  GET_CHARACTERS_START,
  GET_CHARACTERS_SUCCESS,
  CHARACTERS_ERROR
} from "../actions/types";

const initialState = {
  characters: [],
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
    default:
      return state;
  }
}
