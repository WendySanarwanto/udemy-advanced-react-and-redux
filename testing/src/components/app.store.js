import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

// Note: Add middleware(s) as arguments of applyMiddleware function, as you can see them fit.
const createAppStore = applyMiddleware()(createStore);
const appStore = createAppStore(reducers);

export default appStore;