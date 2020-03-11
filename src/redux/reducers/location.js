import {
  GET_LOCATIONS_START,
  GET_LOCATIONS_SUCCESS,
  LOCATIONS_ERROR,
  PREV_PAGE_LOCATION,
  NEXT_PAGE_LOCATION,
  JUMP_TO_PAGE_LOCATION
} from "../actions/types";

const initialState = {
  locations: [],
  locationpage: 1,
  location: null,
  pageCount: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LOCATIONS_START:
      return {
        ...state,
        loading: true,
        error: ""
      };

    case GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: payload.results,
        pageCount: payload.info.pages,
        loading: false
      };

    case LOCATIONS_ERROR: {
      return {
        ...state,
        error: payload,
        loading: false
      };
    }

    case PREV_PAGE_LOCATION:
    case NEXT_PAGE_LOCATION:
    case JUMP_TO_PAGE_LOCATION: {
      return {
        ...state,
        locationpage: payload
      };
    }

    default:
      return state;
  }
}
