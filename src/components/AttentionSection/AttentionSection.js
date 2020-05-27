import React, { useContext } from 'react';
import { LangContext } from '../../context/store';
import styled from 'styled-components';

const Section = styled.div`
  margin: 2rem;
  padding: 2rem;
  background-color: #3f3f3f;
  border: 2px solid #a6a3a3;
  border-radius: 10px;
  color: white;
`;

export const Button = styled.button`
  padding: 1rem;
  background-color: transparent;
  border: 2px solid #a6a3a3;
  border-radius: 5px;
  color: #a6a3a3;
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  width: 10rem;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #333;
  }
`;

const AttentionSection = ({ sectionName = 'attention' }) => {
  // texts brane z LangContext
  const {
    state: { texts, currentLang },
  } = useContext(LangContext);

  const { title, subtitle, ctaButton } = texts[currentLang][sectionName];
  return (
    <Section>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Button>{ctaButton}</Button>
    </Section>
  );
};
export default AttentionSection;
