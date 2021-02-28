import { combineReducers } from "redux";
import TaskReducer from "./listTasks";

const routReducer = combineReducers({ task: TaskReducer });

export default routReducer;;
