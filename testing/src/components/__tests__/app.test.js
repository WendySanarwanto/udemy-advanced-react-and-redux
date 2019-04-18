import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe("App Component", () => {
  let wrapped = null;

  beforeEach(() => {  
    wrapped = shallow(<App />);
  });

  it(`shows an enter comments form `, () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });
  
  it(`shown the comments list`, () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
  })
});
