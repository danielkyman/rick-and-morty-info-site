import {
  GET_EPISODES_START,
  GET_EPISODES_SUCCESS,
  EPISODES_ERROR,
  PREV_PAGE,
  NEXT_PAGE,
  JUMP_TO_PAGE
} from "../actions/types";

const initialState = {
  episodes: [],
  page: 1,
  episode: null,
  pageCount: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EPISODES_START:
      return {
        ...state,
        loading: true,
        error: ""
      };

    case GET_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: payload.results,
        pageCount: payload.info.pages,
        loading: false
      };

    case EPISODES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

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
