import { combineReducers } from 'redux';

import { UPDATE_SEARCH_BOX } from '../../../constants/actions';

export const initialState = {
  inputValue: '',
};

const inputValue = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_BOX: return action.inputValue;
    default: return state;
  }
};

export default combineReducers({
  inputValue,
});
