export const SUBMIT_COMMENT = 'submit_comment';

export function submitComment(comment) {
  return {
    type: SUBMIT_COMMENT,
    payload: comment
  };
}