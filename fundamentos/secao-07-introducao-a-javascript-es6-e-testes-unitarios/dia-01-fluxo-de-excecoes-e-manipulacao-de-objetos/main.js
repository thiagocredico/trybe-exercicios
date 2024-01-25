const INITIAL_STATE = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0,
};
const NEXT_COLOR = "NEXT_COLOR";
const PREVIOUS_COLOR = "PREVIOUS_COLOR";
const RANDOM_COLOR = "RANDOM_COLOR";

const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");
const randomButton = document.querySelector("#random");

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };

    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

nextButton.addEventListener("click", () => {
  store.dispatch({ type: NEXT_COLOR });
});

previousButton.addEventListener("click", () => {
  store.dispatch({ type: PREVIOUS_COLOR });
});

randomButton.addEventListener("click", () => {
  store.dispatch({ type: RANDOM_COLOR });
});

const spanElement = document.querySelector("#value");
const containerElement = document.querySelector("#container");

store.subscribe(() => {
  const { index, colors } = store.getState();

  spanElement.innerHTML = colors[index];
  containerElement.style.background = colors[index];
});
