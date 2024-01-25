import { CHANGE_THEME } from "../actions"

const INITIAL_STATE = {
  theme: "dark"
}
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      // return state.theme = "light" // errado
      return {
        theme: state.theme === "light" ? "dark" : "light"
      }
    default:
      return state
  }
}

export default reducer