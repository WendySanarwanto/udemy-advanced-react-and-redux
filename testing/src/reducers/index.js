import { combineReducers } from 'redux';
import CommentsReducer from './comments.reducer';

const rootReducer = combineReducers({
  comments: CommentsReducer
});

export { CommentsReducer };
export default rootReducer;