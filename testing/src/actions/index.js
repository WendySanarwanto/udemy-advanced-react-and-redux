import axios from 'axios';

import { FETCH_COMMENTS, SUBMIT_COMMENT } from './types';
export { FETCH_COMMENTS, SUBMIT_COMMENT };

const API_HOST_URL = `https://jsonplaceholder.typicode.com`;

export function fetchComments() {
  const responsePromise = axios.get(`${API_HOST_URL}/comments`);
  // console.log(`[debug]<fetchComments> responsePromise: \n`, responsePromise);
  return {
    type: FETCH_COMMENTS,
    payload: responsePromise
  }
}

export function submitComment(comment) {
  // console.log(`[DEBUG] - <actions.submitComment> comment: ${comment}`);  
  return {
    type: SUBMIT_COMMENT,
    payload: comment
  };
}