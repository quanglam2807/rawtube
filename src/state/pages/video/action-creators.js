import {
  VIDEO_GET_FAILED,
  VIDEO_GET_REQUEST,
  VIDEO_GET_SUCCESS,
  VIDEO_RESET,
} from '../../../constants/actions';

export const videoReset = () => ({
  type: VIDEO_RESET,
});

export const videoGetRequest = () => ({
  type: VIDEO_GET_REQUEST,
});

export const videoGetSuccess = params => ({
  type: VIDEO_GET_SUCCESS,
  ...params,
});

export const videoGetFailed = () => ({
  type: VIDEO_GET_FAILED,
});
