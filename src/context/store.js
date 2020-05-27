import React, { createContext, useReducer } from 'react';
import { pl, en } from '../data/data';
import { SET_LANG } from './types';

const INITIAL_STATE = {
  content: { pl, en },
  currentLang: 'pl',
};

const LangContext = createContext(INITIAL_STATE);
const { Provider } = LangContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SET_LANG:
        return {
          ...state,
          currentLang: action.payload,
        };
      default:
        return state;
    }
  }, INITIAL_STATE);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { LangContext, StateProvider };
