import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import EnterCommentForm from './enterCommentForm';
import CommentsList from './commentsList';

describe("App Component", () => {
  
  function showComponentTest(component){
    const wrapped = shallow(<App />);
    expect(wrapped.find(component).length).toEqual(1);
  }

  it(`shows an enter comments form `, () => {
    showComponentTest(EnterCommentForm);
  });
  
  it(`shown the comments list`, () => {
    showComponentTest(CommentsList);
  })
});
