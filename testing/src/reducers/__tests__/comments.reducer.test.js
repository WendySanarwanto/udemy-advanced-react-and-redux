import _ from 'lodash';
import commentsReducer from '../comments.reducer';
import { SUBMIT_COMMENT } from '../../actions';

describe('Comments reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });

  it('handles actions of type SUBMIT_COMMENT', () => {
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

  it('handles action with unknown type', () => {
    const DELETE_COMMENT = 'delete_comment';
    const action = {
      type: DELETE_COMMENT,
      payload: "123"
    };

    const newState = commentsReducer(initialState, action);
    expect(newState).toMatchObject(initialState);
  });
});