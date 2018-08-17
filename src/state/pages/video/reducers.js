import { combineReducers } from 'redux';

import {
  VIDEO_GET_FAILED,
  VIDEO_GET_REQUEST,
  VIDEO_GET_SUCCESS,
  VIDEO_RESET,
} from '../../../constants/actions';

const hasFailed = (state = false, action) => {
  switch (action.type) {
    case VIDEO_GET_FAILED: return true;
    case VIDEO_GET_REQUEST: return false;
    case VIDEO_GET_SUCCESS: return false;
    default: return state;
  }
};

const item = (state = null, action) => {
  switch (action.type) {
    case VIDEO_GET_SUCCESS: return action.item;
    case VIDEO_RESET: return null;
    default: return state;
  }
};

const isGetting = (state = false, action) => {
  switch (action.type) {
    case VIDEO_GET_FAILED: return false;
    case VIDEO_GET_REQUEST: return true;
    case VIDEO_GET_SUCCESS: return false;
    default: return state;
  }
};

export default combineReducers({
  hasFailed,
  isGetting,
  item,
});
