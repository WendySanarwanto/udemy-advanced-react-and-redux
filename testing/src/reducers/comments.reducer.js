import { SUBMIT_COMMENT } from '../actions/index';
import shortid from 'shortid';

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
    
    default:
      return state;
  }
}