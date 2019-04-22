import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({dispatch, getState}) => next => action => {
  next(action);

  const state = getState();
  const isStateValid = tv4.validate(state, stateSchema);
  // console.log(`[debug]<stateValidator> isStateValid: ${ isStateValid }`);
  if (!isStateValid) {
    console.warn(`Invalid state schema detected`);
  }
};
