import React, { useContext } from 'react';
import { LangContext } from '../../context/store';

const LangChanger = () => {
  const { dispatch } = useContext(LangContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'SET_LANG', payload: 'en' })}>
        ENG
      </button>
      <button onClick={() => dispatch({ type: 'SET_LANG', payload: 'pl' })}>
        PL
      </button>
    </div>
  );
};

export default LangChanger;
