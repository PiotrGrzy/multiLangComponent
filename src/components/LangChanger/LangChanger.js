import React, { useContext } from 'react';
import { LangContext } from '../../context/store';
import styled from 'styled-components';
import uk from '../../assets/UK.png';
import poland from '../../assets/Poland.png';

const Button = styled.button`
  border: none;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
  width: 40px;
  height: 20px;
  margin: 5px;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const LangChanger = () => {
  const { dispatch } = useContext(LangContext);
  return (
    <div>
      <Button onClick={() => dispatch({ type: 'SET_LANG', payload: 'pl' })}>
        <img src={poland} alt="Polish flag" />
      </Button>
      <Button onClick={() => dispatch({ type: 'SET_LANG', payload: 'en' })}>
        <img src={uk} alt="English flag" />
      </Button>
    </div>
  );
};

export default LangChanger;
