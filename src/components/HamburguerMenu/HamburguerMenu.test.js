import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HamburguerMenu from './HamburguerMenu';

describe('HamburguerMenu', () => {
  let props;
  let shallowHamburguerMenu;
  let renderedHamburguerMenu;
  let mountedHamburguerMenu;

  const shallowTestComponent = () => {
    if (!shallowHamburguerMenu) {
      shallowHamburguerMenu = shallow(<HamburguerMenu {...props} />);
    }
    return shallowHamburguerMenu;
  };

  const renderTestComponent = () => {
    if (!renderedHamburguerMenu) {
      renderedHamburguerMenu = render(<HamburguerMenu {...props} />);
    }
    return renderedHamburguerMenu;
  };

  const mountTestComponent = () => {
    if (!mountedHamburguerMenu) {
      mountedHamburguerMenu = mount(<HamburguerMenu {...props} />);
    }
    return mountedHamburguerMenu;
  };  

  beforeEach(() => {
    props = {};
    shallowHamburguerMenu = undefined;
    renderedHamburguerMenu = undefined;
    mountedHamburguerMenu = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
