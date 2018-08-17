import {
  searchGetFailed,
  searchGetRequest,
  searchGetSuccess,
  searchReset,
} from './action-creators';

import { YOUTUBE_DATA_V3_API_KEY } from '../../../constants/api-keys';

export const getItems = query => (dispatch, getState) => {
  const state = getState();

  const {
    items,
    isGetting,
    nextPageToken,
  } = state.pages.search;

  if (isGetting) return;

  // If all pages have already been fetched, we stop
  // If all pages have already been fetched, we stop
  if (items && items.length > 0 && !nextPageToken) return;

  dispatch(searchGetRequest());

  let url = `https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=24&part=snippet&type=video&key=${YOUTUBE_DATA_V3_API_KEY}`;
  if (nextPageToken) {
    url += `&pageToken=${nextPageToken}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(res => dispatch(searchGetSuccess({
      items: res.items,
      nextPageToken: res.nextPageToken,
    })))
    .catch(() => dispatch(searchGetFailed()));
};

export const resetThenGetItems = query => (dispatch) => {
  dispatch(searchReset());
  dispatch(getItems(query));
};
