import {
  videoGetFailed,
  videoGetRequest,
  videoGetSuccess,
  videoReset,
} from './action-creators';

import { YOUTUBE_DATA_V3_API_KEY } from '../../../constants/api-keys';

export const getItem = id => (dispatch, getState) => {
  const state = getState();

  const {
    isGetting,
  } = state.pages.video;

  if (isGetting) return;

  dispatch(videoGetRequest());

  fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=id%2Csnippet&key=${YOUTUBE_DATA_V3_API_KEY}`)
    .then(res => res.json())
    .then(res => dispatch(videoGetSuccess({
      item: res.items[0],
    })))
    .catch(() => dispatch(videoGetFailed()));
};

export const resetThenGetItem = id => (dispatch) => {
  dispatch(videoReset());
  dispatch(getItem(id));
};
