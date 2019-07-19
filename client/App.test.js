import React from 'react';
import {
  shallow
} from 'enzyme';
import App from './App.jsx';

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow( < App / > );

    expect(component).toMatchSnapshot();
  });
  it('should render two <section> tags', () => {
    const component = shallow( < App / > );
    expect(component.find("section")).toHaveLength(2);
  });
});