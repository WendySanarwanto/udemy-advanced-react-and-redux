export default ({ dispatch }) => next => action => {
  // Check to see if the payload has a promise on its 'payload' property
  // If it does, wait for it to resolve
  // If it doesn't, send the action on to next middleware
  if ( (!action.payload) || (!action.payload.then) ) {
    return next(action);
  }

  // Wait the promise to resolve (Get its data).
  // Then, create a new action with that data and dispatch it.
  action.payload.then(response => {
    const newAction = {...action, payload: response};
    dispatch(newAction);
  });
}
  
