import {
  GET_EPISODES_START,
  GET_EPISODES_SUCCESS,
  EPISODES_ERROR,
  PREV_PAGE_EPISODE,
  NEXT_PAGE_EPISODE,
  JUMP_TO_PAGE_EPISODE
} from "../actions/types";

const initialState = {
  episodes: [],
  episodepage: 1,
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

    case PREV_PAGE_EPISODE:
    case NEXT_PAGE_EPISODE:
    case JUMP_TO_PAGE_EPISODE: {
      return {
        ...state,
        episodepage: payload
      };
    }

    default:
      return state;
  }
}
