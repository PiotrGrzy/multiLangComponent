import React, { useContext } from 'react';
import { mount } from 'enzyme';
import { LangContext, StateProvider, INITIAL_STATE } from '../context/store';
import LangChanger from '../components/LangChanger/LangChanger';

describe('LangChanger component', () => {
  const TestComponent = () => {
    const { state } = useContext(LangContext);
    return <div>{state.currentLang}</div>;
  };
  const wrapper = mount(
    <StateProvider>
      <LangChanger />
      <TestComponent />
    </StateProvider>
  );

  it('renders 2 buttons', () => {
    expect(wrapper.find('button').length).toEqual(2);
  });

  describe('when button 2 is clicked', () => {
    it('sets currentLang in context to "en"', () => {
      wrapper.find('button').at(1).simulate('click');
      wrapper.update();

      expect(wrapper.find(TestComponent).text()).toEqual('en');
    });
  });

  describe('when button 1 is clicked', () => {
    it('sets currentLang in context back to "pl"', () => {
      wrapper.find('button').at(0).simulate('click');
      wrapper.update();

      expect(wrapper.find(TestComponent).text()).toEqual('pl');
    });
  });
});
