import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import router from './root/router/reducers';
import preferences from './root/preferences/reducers';
import searchBox from './root/search-box/reducers';

import pages from './pages/reducers';

const rootReducer = combineReducers({
  pages,
  preferences,
  router,
  searchBox,
});

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware),
);

// init store
const store = configureStore();

export default store;
