import {
  ADD_Task,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from "../ActionTypes/listTasks";

const initialState = {
  listTasks: [
    { id: Math.random(), text: "task01", isDone: false },
    { id: Math.random(), text: "task02", isDone: false },
  ],
};

const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_Task:
      return { ...state, listTasks: [...state.listTasks, payload] };
    case DELETE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.filter((el) => el.id != payload),
      };
    case DONE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id == payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id == payload.id ? { ...el, text: payload.newTask } : el
        ),
      };
    default:
      return state;
  }
};

export default TaskReducer;
