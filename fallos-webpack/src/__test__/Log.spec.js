import React from 'react';
import { Provider } from "react-redux";
import { render } from 'enzyme';
import Login from '../Login';
import store from '../store';

describe("Login", () => {
  describe( "render", () => {
    it("should render all HTML elements", () => {
      const wrapper = render(<Provider store={store}><Login /></Provider> );
      expect(wrapper.find('label').length).toBe(2);
      expect(wrapper.find('button').length).toBe(1);
      expect(wrapper.find('form')).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    })
  })
})