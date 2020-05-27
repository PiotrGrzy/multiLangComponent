import React from 'react';
import LangChanger from './components/LangChanger/LangChanger';
import NewsletterSection from './components/NewsletterSection/NewsletterSection';
import AttentionSection from './components/AttentionSection/AttentionSection';
import styled from 'styled-components';

const StyledApp = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <StyledApp>
      <LangChanger />
      <NewsletterSection />
      <AttentionSection />
    </StyledApp>
  );
}

export default App;
