import { UPDATE_ROUTER } from '../../../constants/actions';

const getPathParamFromPathname = (pathname) => {
  const components = pathname.split('/');

  const path = `/${components[1]}`;
  const param = decodeURIComponent(`${components.slice(2).join('/')}`);

  return { path, param };
};

const i = getPathParamFromPathname(window.location.pathname);

export const initialState = { path: i.path, param: i.param };

const router = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROUTER: {
      const { pathname } = action;

      const { path, param } = getPathParamFromPathname(pathname);

      return Object.assign({}, state, {
        path, param,
      });
    }
    default:
      return state;
  }
};

export default router;
