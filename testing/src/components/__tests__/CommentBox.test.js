import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../root';

describe('Enter Comment Form', () => {
  let wrapped = null;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox submitComment={()=>{}} />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it(`has a text area and button`, () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect (wrapped.find(`button`).length).toEqual(1);
  });

  describe(`The Text Area`, () => {
    const enteredInput = "Hello World !";

    beforeEach(() => {
      // Simulate change event on the textarea
      wrapped.find('textarea').simulate('change', { 
        target: {
          value: enteredInput
        }
      });
      
      // force component to re-render
      wrapped.update();
    });

    it(`allows user to enter value on the textarea field`, () => {      
      expect(wrapped.find('textarea').prop('value')).toEqual(enteredInput);
    });
  
    it(`empties textarea when the input is submitted`, ()=>{
      // Simulate form's on submit event
      wrapped.find(`form`).simulate('submit', {
        target: {
          preventDefault: () => {}
        }
      });
  
      // force component to re-render
      wrapped.update();    
      expect(wrapped.find('textarea').prop('value')).toEqual("");
    });  
  });
});