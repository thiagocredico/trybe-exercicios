import { combineReducers } from 'redux';
import { PERSONAL_FORM_SUBMIT, PROFESSIONAL_FORM_SUBMIT } from '../actions';

const INITIAL_STATE = {
  personalData: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professionalData: {
    resume: '',
    role: '',
    description: '',
  },
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_FORM_SUBMIT:
    return { ...state, professionalData: { ...action.payload } };
  case PERSONAL_FORM_SUBMIT:
    return { ...state, personalData: { ...action.payload } };
  default:
    return state;
  }
};

const rootReducer = combineReducers({ profileReducer });

export default rootReducer;
