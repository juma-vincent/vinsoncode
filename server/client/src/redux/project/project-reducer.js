import { projectData } from "../../projectData";

const INITIAL_STATE = {
  projects: {},
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PROJECT_DATA":
      return {
        ...state,
        projects: projectData,
      };
    default:
      return state;
  }
};

export default projectReducer;
