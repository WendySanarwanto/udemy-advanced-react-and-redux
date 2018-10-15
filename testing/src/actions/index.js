export const SUBMIT_COMMENT = 'submit_comment';

export function submitComment(comment) {
  // console.log(`[DEBUG] - <actions.submitComment> comment: ${comment}`);
  return {
    type: SUBMIT_COMMENT,
    payload: comment
  };
}