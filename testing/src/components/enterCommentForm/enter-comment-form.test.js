import React from 'react';
import { mount } from 'enzyme';
import { EnterCommentForm } from './enter-comment-form';

describe('Enter Comment Form', () => {
  let wrapped = null;

  beforeEach(() => {
    wrapped = mount(<EnterCommentForm />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it(`has a text area and button`, () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect (wrapped.find(`button`).length).toEqual(1);
  });

  it(`allows user to enter input on the textarea `, () => {
    const enteredInput = "Hello World !";
    wrapped.find('textarea').simulate('change', { 
      target: {
        value: enteredInput
      }
    });
    
    // force component to re-render
    wrapped.update();
    
    expect(wrapped.find('textarea').prop('value')).toEqual(enteredInput);
  })
});