import { CHANGE_THEME } from "../action";

const INITIAL_STATE = {
  theme: "light",
  // brokenBulb: false,
};

// Quando algum evento (dispatch) for disparado, essa função é executada
// O reducer, OBRIGATORIAMENTE, tem que retornar um novo estado
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default reducer;
