import React, { useContext } from 'react';
import LangChanger from './components/LangChanger/LangChanger';
import { LangContext } from './context/store';

function App() {
  const { state } = useContext(LangContext);
  return (
    <div className="App">
      <div>App</div>
      <LangChanger />
      <p>{state.currentLang}</p>
    </div>
  );
}

export default App;
