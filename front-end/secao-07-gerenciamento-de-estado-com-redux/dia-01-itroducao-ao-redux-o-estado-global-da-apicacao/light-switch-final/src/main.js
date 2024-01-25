import { changeTheme } from "./redux/actions";
import store from "./redux/store";

const button = document.getElementById("light-switch");
const wrapper = document.getElementById("wrapper");
const lightBulb = document.getElementById("light-bulb");

button.addEventListener("click", () => {
  store.dispatch(changeTheme());
});

store.subscribe(() => {
  const state = store.getState();
  
  wrapper.classList = state.theme

  lightBulb.src = `img/${state.theme}.png`;
});
