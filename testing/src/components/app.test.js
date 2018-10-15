import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import EnterCommentForm from './enterCommentForm';
import CommentsList from './commentsList';

describe("App Component", () => {
  let wrapped = null;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it(`shows an enter comments form `, () => {
    expect(wrapped.find(EnterCommentForm).length).toEqual(1);
  });
  
  it(`shown the comments list`, () => {
    expect(wrapped.find(CommentsList).length).toEqual(1);
  })
});
