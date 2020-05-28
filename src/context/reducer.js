import { SET_LANG } from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_LANG:
      return {
        ...state,
        currentLang: action.payload,
      };
    default:
      return state;
  }
};
