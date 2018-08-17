import { UPDATE_SEARCH_BOX } from '../../../constants/actions';

export const updateSearchBox = inputValue => ({
  type: UPDATE_SEARCH_BOX,
  inputValue,
});
