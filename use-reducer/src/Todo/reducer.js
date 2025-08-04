import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants';


// initialState
export const initialState = {
  job: '',
  jobs: []
};



// Reducer function
const reducer2 = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs];//đây là một shallow copy
      newJobs.splice(action.payload, 1); // xóa job tại vị trí index
      newState = {
        ...state,
        jobs: newJobs
      }
      break
    default:
      throw new Error(`Unknown action type: ${action.type}`);

  }
  return newState;
}

export default reducer2;