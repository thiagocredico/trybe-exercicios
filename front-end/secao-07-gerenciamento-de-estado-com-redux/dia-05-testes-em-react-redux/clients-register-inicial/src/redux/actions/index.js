export const ADD_REGISTER = 'ADD_REGISTER';
export const DELETE_REGISTER = 'DELETE_REGISTER';
export const LOGIN = 'LOGIN';

export const addRegister = (value) => ({ type: ADD_REGISTER, data: value });

export const deleteRegister = (value) => ({ type: DELETE_REGISTER, value });

export const login = (value) => ({ type: LOGIN, value });
