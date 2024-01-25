// import { legacy_createStore as createStore } from "redux"
// import { composeWithDevTools } from "@redux-devtools/extension"

import { actionChangeTheme } from "./redux/actions";
import store from "./redux/store";

const button = document.getElementById("light-switch");
const wrapper = document.getElementById("wrapper");
const lightBulb = document.getElementById("light-bulb");

// getState - ele serve para ler o estado (state) da store do Redux
// dispatch - ele é responsavel por avisar o redux que algo aconteceu
// subscribe - subscribe ele serve para se conectar ao Redux

/**
 * 1 - instalar o redux - npm install redux
 * 2 - criar a store
 * 3 - criar o reducer
    // um reducer ele recebe o state (initial state) e a action
 * 4 - configurar o Redux DevTools ( npm install @redux-devtools/extension )
 * 5 - configurar a minha action (para um evento)
 *    /// uma action é um objeto com a propriedade "type"
 *    /// com uma string (letra maiscula por causa do Clean Code)
 * 6 - Lógica do nosso reducer com o switch case
 * 7 - boas praticas
 *  7.1 - Usamos actions type para guardas as strings
 *  7.2 - crias as pastas do redux
 */
// obs: Redux toolkit para projetos profissionais

// constructor
// this.state = {
//   theme: "light"
// }

// const CHANGE_THEME = "CHANGE_THEME"

// const INITIAL_STATE = {
//   theme: "dark"
// }
// function reducer(state = INITIAL_STATE, action) {
//   // if(action.type === "CHANGE_THEME") {
//   //   return {
//   //     theme: "light"
//   //   }
//   // }
//   // if(action.type === "ADD_TO_CART") {
//   //   return {
//   //     ...
//   //   }
//   // }
//   // return state

//   switch (action.type) {
//     case CHANGE_THEME:
//       return {
//         theme: state.theme === "light" ? "dark" : "light"
//       }
//     // case "ADD_TO_CART"
//     default:
//       return state
//   }
// }

// const store  = createStore(reducer, composeWithDevTools())

// // const MATH_PI = 3.1416
button.addEventListener("click", () => {
  // store.dispatch({ type: CHANGE_THEME, qualquerCoisa: 42 })
  store.dispatch(actionChangeTheme())
})

store.subscribe(() => {
  console.log("subscribe", store.getState())
  const state = store.getState()

  wrapper.classList = state.theme

  lightBulb.src = `img/${state.theme}.png`
})
