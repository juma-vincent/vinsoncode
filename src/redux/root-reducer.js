import { combineReducers } from "redux";
import projectReducer from "./project/project-reducer";

export default combineReducers({
  project: projectReducer,
});
