import _ from 'lodash';
import commentsReducer from '../comments.reducer';
import { SUBMIT_COMMENT } from '../../actions';

describe('Comments reducer', () => {
  it('handles actions of type SUBMIT_COMMENT', () => {
    const initialState = {};
    const newComment = "This is a test comment";
    const action = {
      type: SUBMIT_COMMENT,
      payload: newComment
    };
    const newState = commentsReducer(initialState, action);
    expect(newState).toBeDefined();
    const mappedState = _.map(newState, comment => comment);
    expect(mappedState).toBeDefined();
    expect(mappedState.length).toBeGreaterThan(0);
    expect(mappedState[0].comment).toEqual(newComment);
  });
});