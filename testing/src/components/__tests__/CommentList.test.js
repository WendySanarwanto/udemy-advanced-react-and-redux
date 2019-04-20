import React from 'react';
import { mount } from 'enzyme';
import shortid from 'shortid';

import CommentList from '../CommentList';
import Root from '../../Root';

describe(`CommentList`, () => {
  let wrapped;
  let comment1, comment2;
  
  beforeEach(() => {
    const id1 = shortid.generate(), 
          id2 = shortid.generate();
    comment1 = {
      id: id1,
      name: 'Comment 1'
    };
    comment2 = {
      id: id2,
      name: 'Comment 2'
    };
    const initialState = { 
      comments: {
        [id1]: comment1, 
        [id2]: comment2
      }
    };

    wrapped = mount(
      <Root initialState={ initialState } >
        <CommentList />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('creates one <li> per comment', () => {
    expect(wrapped.find('li')).toHaveLength(2);
  });

  it('show text for each comments', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
  });
});