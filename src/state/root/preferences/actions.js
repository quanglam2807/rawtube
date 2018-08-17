import { UPDATE_PREFERENCE } from '../../../constants/actions';

export const updatePreference = (name, value) => ({
  type: UPDATE_PREFERENCE,
  name,
  value,
});
