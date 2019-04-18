import { SUBMIT_COMMENT, submitComment } from '../index';

describe('submitComment', () => {
  it(`has a type of SUBMIT_COMMENT`, () => {
    const action = submitComment();
    expect(action).toBeDefined();
    expect(action.type).toEqual(SUBMIT_COMMENT);
  });

  it(`produces an action that has a payload of the new comment's text`, () => {
    const newComment = 'Hello World';
    const action = submitComment(newComment);
    expect(action).toBeDefined();
    expect(action.payload).toEqual(newComment);
  });
});