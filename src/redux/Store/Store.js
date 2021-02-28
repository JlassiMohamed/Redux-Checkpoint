import { createStore } from "redux";
import routReducer from "../Reducer/"; /* same as: ../Reducer/index.js */

const store = createStore(routReducer,)
export default store;
