import { combineReducers } from 'redux';

import search from './search/reducers';
import video from './video/reducers';

export default combineReducers({
  search,
  video,
});
