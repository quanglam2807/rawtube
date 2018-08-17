import { UPDATE_ROUTER } from '../../../constants/actions';

export const updateRouter = pathname => ({
  type: UPDATE_ROUTER,
  pathname,
});
