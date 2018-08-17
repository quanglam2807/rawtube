import {
  SEARCH_GET_FAILED,
  SEARCH_GET_REQUEST,
  SEARCH_GET_SUCCESS,
  SEARCH_RESET,
} from '../../../constants/actions';

export const searchReset = () => ({
  type: SEARCH_RESET,
});

export const searchGetRequest = () => ({
  type: SEARCH_GET_REQUEST,
});

export const searchGetSuccess = params => ({
  type: SEARCH_GET_SUCCESS,
  ...params,
});

export const searchGetFailed = () => ({
  type: SEARCH_GET_FAILED,
});
