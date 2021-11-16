import { combineReducers } from "redux";
import listaReducer from "./listaReducer";
import cartReducer from "./cartReducer";
import accountReducer from "./accountReducer";

const rootReducers = combineReducers({
  lista: listaReducer,
  cart: cartReducer,
  account: accountReducer,
});

export default rootReducers;
