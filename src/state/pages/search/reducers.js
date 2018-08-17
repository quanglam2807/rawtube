import { combineReducers } from 'redux';

import {
  SEARCH_GET_FAILED,
  SEARCH_GET_REQUEST,
  SEARCH_GET_SUCCESS,
  SEARCH_RESET,
} from '../../../constants/actions';

const hasFailed = (state = false, action) => {
  switch (action.type) {
    case SEARCH_GET_FAILED: return true;
    case SEARCH_GET_REQUEST: return false;
    case SEARCH_GET_SUCCESS: return false;
    default: return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case SEARCH_GET_SUCCESS: return state.concat(action.items);
    case SEARCH_RESET: return [];
    default: return state;
  }
};

const isGetting = (state = false, action) => {
  switch (action.type) {
    case SEARCH_GET_FAILED: return false;
    case SEARCH_GET_REQUEST: return true;
    case SEARCH_GET_SUCCESS: return false;
    default: return state;
  }
};

const nextPageToken = (state = -1, action) => {
  switch (action.type) {
    case SEARCH_GET_SUCCESS: return action.nextPageToken;
    case SEARCH_RESET: return -1;
    default: return state;
  }
};


export default combineReducers({
  hasFailed,
  items,
  isGetting,
  nextPageToken,
});
