import SUBMIT_COMMENT from '../actions/index';
import shortid from 'shortid';

export default function(state={}, action){
  switch(action.type){
    case SUBMIT_COMMENT:
      let newId = shortid.generate();
      return { ...state, 
        [newId]: {
          id: newId,
          comment: action.payload
        }
      };
    
    default:
      return state;
  }
}