import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer/theme";
import { composeWithDevTools } from "@redux-devtools/extension";

// 1. Configuração do Redux store

const store = createStore(reducer, composeWithDevTools());

export default store;
