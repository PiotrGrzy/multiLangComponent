import { SET_LANG } from './types';

export const setLang = (lang) => {
  return { type: SET_LANG, payload: lang };
};
