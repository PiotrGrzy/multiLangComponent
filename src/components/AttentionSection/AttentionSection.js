import React from 'react';

const AttentionSection = ({ sectionName = 'attention' }) => {
  // texts brane z LangContext
  const { title, subtitle, ctaButton } = texts[sectionName];
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  );
};
export default AttentionSection;
