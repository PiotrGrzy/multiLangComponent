import React from 'react';

const NewsletterSection = ({ sectionName = 'newsletter' }) => {
  // texts brane z LangContext
  const { title, ctaButton, action } = texts[sectionName];
  return (
    <form action={action}>
      <h1>{title}</h1>
      <button>{ctaButton}</button>
    </form>
  );
};

export default NewsletterSection;
