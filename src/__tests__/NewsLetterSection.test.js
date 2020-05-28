import React from 'react';
import { mount } from 'enzyme';
import { LangContext } from '../context/store';
import NewsLetterSection from '../components/NewsLetterSection/NewsLetterSection';
import { pl, en } from '../data/data';

describe('NewsLetterSection Component', () => {
  describe('when polish is selected', () => {
    const mockedContext = {
      state: {
        texts: { pl: pl, en: en },
        currentLang: 'pl',
      },
    };

    const {
      title,
      ctaButton,
      action,
    } = mockedContext.state.texts.pl.newsletter;

    const wrapper = mount(
      <LangContext.Provider value={mockedContext}>
        <NewsLetterSection />
      </LangContext.Provider>
    );

    it('renders properly with polish texts', () => {
      expect(wrapper.find('form').props().action).toEqual(action);
      expect(wrapper.find('h1').text()).toEqual(title);
      expect(wrapper.find('button').text()).toEqual(ctaButton);
    });
  });

  describe('when english is selected', () => {
    const mockedContext = {
      state: {
        texts: { pl: pl, en: en },
        currentLang: 'en',
      },
    };

    const {
      title,
      ctaButton,
      action,
    } = mockedContext.state.texts.en.newsletter;

    const wrapper2 = mount(
      <LangContext.Provider value={mockedContext}>
        <NewsLetterSection />
      </LangContext.Provider>
    );

    it('renders properly with english texts', () => {
      expect(wrapper2.find('form').props().action).toEqual(action);
      expect(wrapper2.find('h1').text()).toEqual(title);
      expect(wrapper2.find('button').text()).toEqual(ctaButton);
    });
  });
});
