import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import { pl, en } from '../data/data';
import { SET_LANG } from './types';

const INITIAL_STATE = {
  texts: { pl, en },
  currentLang: 'pl',
};

const LangContext = createContext();
const { Provider } = LangContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setLang = (lang) => {
    dispatch({ type: SET_LANG, payload: lang });
  };

  return <Provider value={{ state, setLang }}>{children}</Provider>;
};

export { LangContext, StateProvider };
