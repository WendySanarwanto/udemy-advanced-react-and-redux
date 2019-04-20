import _ from 'lodash';
import shortid from 'shortid';

import { FETCH_COMMENTS, SUBMIT_COMMENT } from '../actions/index';

export default function(state={}, action){
  switch(action.type){
    case SUBMIT_COMMENT:
      let newId = shortid.generate();
      const updatedState = { ...state, 
        [newId]: {
          id: newId,
          comment: action.payload
        }
      };
      // console.log(`[DEBUG] - <comments.reducer> updatedState: \n`, updatedState);
      return updatedState;
    case FETCH_COMMENTS:
      // console.log(`[debug]<FETCH_COMMENTS> action.payload.data: \n`, action.payload.data);
      return {...state, ..._.mapKeys(action.payload.data, 'id')};
    default:
      return state;
  }
}