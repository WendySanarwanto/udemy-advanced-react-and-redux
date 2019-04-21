import { combineReducers } from 'redux';
import CommentsReducer from './comments.reducer';
import AuthReducer from './auth.reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  comments: CommentsReducer
});

export { AuthReducer, CommentsReducer };
export default rootReducer;