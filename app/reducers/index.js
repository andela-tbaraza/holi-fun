import { combineReducers } from 'redux';
import interests from './interestReducer';

const rootReducer = combineReducers({
  interests
});

export default rootReducer;
