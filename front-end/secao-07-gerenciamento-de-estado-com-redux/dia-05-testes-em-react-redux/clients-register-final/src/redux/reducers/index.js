import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const rootReducers = combineReducers({
  customers: registerReducer,
  login: loginReducer,
});

export default rootReducers;
