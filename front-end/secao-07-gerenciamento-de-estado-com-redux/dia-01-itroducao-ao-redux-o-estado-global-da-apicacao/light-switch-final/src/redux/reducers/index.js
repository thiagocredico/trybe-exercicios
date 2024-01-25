import { CHANGE_THEME } from "../actions";

const INITIAL_STATE = {
  theme: "light",
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark"
      }
  
    default:
      return state
  }
}

export default reducer