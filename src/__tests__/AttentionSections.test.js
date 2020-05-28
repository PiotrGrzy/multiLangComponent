import React from 'react';
import { mount } from 'enzyme';
import { LangContext } from '../context/store';
import AttentionSection from '../components/AttentionSection/AttentionSection';
import { pl, en } from '../data/data';

describe('AttentionSection Component', () => {
  describe('when polish is selected', () => {
    const mockedContext = {
      state: {
        texts: { pl: pl, en: en },
        currentLang: 'pl',
      },
    };

    const {
      title,
      subtitle,
      ctaButton,
    } = mockedContext.state.texts.pl.attention;

    const wrapper = mount(
      <LangContext.Provider value={mockedContext}>
        <AttentionSection />
      </LangContext.Provider>
    );

    it('renders properly with polish texts', () => {
      expect(wrapper.find('h1').text()).toEqual(title);
      expect(wrapper.find('h2').text()).toEqual(subtitle);
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
      subtitle,
      ctaButton,
    } = mockedContext.state.texts.en.attention;

    const wrapper2 = mount(
      <LangContext.Provider value={mockedContext}>
        <AttentionSection />
      </LangContext.Provider>
    );

    it('renders properly with english texts', () => {
      expect(wrapper2.find('h1').text()).toEqual(title);
      expect(wrapper2.find('h2').text()).toEqual(subtitle);
      expect(wrapper2.find('button').text()).toEqual(ctaButton);
    });
  });
});
