import { UPDATE_PREFERENCE } from '../../../constants/actions';

export const defaultState = {
  darkTheme: false,
};

const getInitialValue = (name) => {
  /* global localStorage */
  const localValue = localStorage.getItem(`preference-${name}`);
  if (localValue == null) {
    return defaultState[name];
  }

  return JSON.parse(localValue);
};

const initialState = {};
Object.keys(defaultState).forEach((key) => {
  initialState[key] = getInitialValue(key);
});

const preferences = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PREFERENCE: {
      const { name, value } = action;
      const newState = {};

      newState[name] = action.value;

      localStorage.setItem(`preference-${name}`, JSON.stringify(value));

      return Object.assign({}, state, newState);
    }
    default:
      return state;
  }
};

export default preferences;
