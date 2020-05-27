import React, { useContext } from 'react';
import { LangContext } from '../../context/store';
import styled from 'styled-components';
import { Button } from '../AttentionSection/AttentionSection';

const Form = styled.form`
  margin: 2rem;
  padding: 2rem;
  background-color: #3f3f3f;
  border: 2px solid #a6a3a3;
  border-radius: 10px;
  color: white;
`;

const NewsletterSection = ({ sectionName = 'newsletter' }) => {
  // texts brane z LangContext
  const {
    state: { texts, currentLang },
  } = useContext(LangContext);

  const { title, ctaButton, action } = texts[currentLang][sectionName];
  return (
    <Form action={action}>
      <h1>{title}</h1>
      <Button>{ctaButton}</Button>
    </Form>
  );
};

export default NewsletterSection;
