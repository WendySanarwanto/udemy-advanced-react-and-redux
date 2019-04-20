import React from 'react';
import { mount, u } from 'enzyme';

import CommentBox from '../CommentBox';
import Root from '../../Root';

describe(`CommentBox`, () => {
  let wrapped = null;
  const textAreaInput = 'ReactJS is Awesome !!!';

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  const doRefresh = (target, targetName) => {
    target.update();
    return wrapped.find(targetName); 
  }

  it(`has a text area and 2 buttons`, () => {    
    expect(wrapped.find('textarea')).toHaveLength(1);
    expect(wrapped.find('button')).toHaveLength(2);
  });

  describe(`the text area`, () => {
    let textarea;

    beforeEach(() => {
      // Find the text area element
      textarea = wrapped.find('textarea');
      expect(textarea).toHaveLength(1);
      
      // Simulate a 'change' event & Provide a fake event object
      const expected = textAreaInput;
      textarea.simulate('change', { target: { value: expected } });
  
      // Force the component to update
      textarea.update();
  
      // Important! Need to Re-wrapp target component.
      textarea = wrapped.find('textarea'); 
    });

    it(`has a text area that users can type in`, () => {
      // Assert that the textareas value has changes
      expect(textarea.prop('value')).toEqual(textAreaInput);
    });
  
    it(`clears the text area, when form is submitted`, () => {
      // Find the form element
      let form = wrapped.find('form');
      expect(form).toHaveLength(1);
  
      const input = textAreaInput;
      expect(textarea.prop('value')).toEqual(input);
  
      form.simulate('submit', { preventDefault: () => {} });
      form.update();
      textarea = doRefresh(textarea, 'textarea');
      expect(textarea.prop('value')).toEqual('');
    });

  });


});