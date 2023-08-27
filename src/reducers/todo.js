import { TodoActionTypes } from "../actions/todo";

const initialState = {
  dailyTodos: [],
  monthlyTodos: [],
  weeklyTodos: [],
  recentTodos: [
    { id: '1', title: 'Task 1', description: "Task 1" },
    { id: '2', title: 'Task 2', description: "Task 2" },
    { id: '3', title: 'Task 3', description: "Task 3" },
    { id: '4', title: 'Task 4', description: "Task 4" },
    { id: '5', title: 'Task 5', description: "Task 5" },
    { id: '6', title: 'Task 6', description: "Task 6" },
    { id: '7', title: 'Task 7', description: "Task 7" },
    { id: '8', title: 'Task 8', description: "Task 8" },
    { id: '9', title: 'Task 9', description: "Task 9" },
    { id: '10', title: 'Task 1', description: "Task 10" },
    { id: '11', title: 'Task 2', description: "Task 11" },
    { id: '12', title: 'Task 3', description: "Task 12" },
    { id: '13', title: 'Task 1', description: "Task 13" },
    { id: '14', title: 'Task 2', description: "Task 14" },
    { id: '15', title: 'Task 3', description: "Task 15" },
    { id: '16', title: 'Task 1', description: "Task 16" },
    { id: '17', title: 'Task 2', description: "Task 17" },
  ],
  weeklyTodosTotalCount: 0,
  recentTodosTotalCount: 0,
  monthlyTodosTotalCount: 0,
  dailyTodosTotalCount: 0,
  loaders: {
    dailyTodos: false,
    monthlyTodos: false,
    weeklyTodos: false,
    recentTodos: false,
    weeklyTodosTotalCount: false,
    recentTodosTotalCount: false,
    monthlyTodosTotalCount: false,
    dailyTodosTotalCount: false,
  },
  errors: {
    dailyTodos: null,
    monthlyTodos: null,
    weeklyTodos: null,
    recentTodos: null,
    weeklyTodosTotalCount: null,
    recentTodosTotalCount: null,
    monthlyTodosTotalCount: null,
    dailyTodosTotalCount: null,  
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
      case TodoActionTypes.FETCH_DAILY_TODOS:
        return {
          ...state,
          loaders: {
            ...state.loaders,
            dailyTodos: true,
          },
        };
      case TodoActionTypes.FETCH_DAILY_TODOS_SUCCESS:
        return {
          ...state,
          dailyTodos: action.payload,
          loaders: {
            ...state.loaders,
            dailyTodos: false,
          },
        };
      case TodoActionTypes.FETCH_DAILY_TODOS_FAILURE:
        return {
          ...state,
          errors: {
            ...state.errors,
            dailyTodos: action.payload,
          },
          loaders: {
            ...state.loaders,
            dailyTodos: false,
          },
        };
      case TodoActionTypes.FETCH_WEEKLY_TODOS:
        return {
          ...state,
          loaders: {
            ...state.loaders,
            weeklyTodos: true,
          },
        };
      case TodoActionTypes.FETCH_WEEKLY_TODOS_SUCCESS:
        return {
          ...state,
          weeklyTodos: action.payload,
          loaders: {
            ...state.loaders,
            weeklyTodos: false,
          },
        };
      case TodoActionTypes.FETCH_WEEKLY_TODOS_FAILURE:
        return {
          ...state,
          errors: {
            ...state.errors,
            weeklyTodos: action.payload,
          },
          loaders: {
            ...state.loaders,
            weeklyTodos: false,
          },
        };
      case TodoActionTypes.FETCH_MONTHLY_TODOS:
        return {
          ...state,
          loaders: {
            ...state.loaders,
            monthlyTodos: true,
          },
        };
      case TodoActionTypes.FETCH_MONTHLY_TODOS_SUCCESS:
        return {
          ...state,
          monthlyTodos: action.payload,
          loaders: {
            ...state.loaders,
            monthlyTodos: false,
          },
        };
      case TodoActionTypes.FETCH_MONTHLY_TODOS_FAILURE:
        return {
          ...state,
          errors: {
            ...state.errors,
            monthlyTodos: action.payload,
          },
          loaders: {
            ...state.loaders,
            monthlyTodos: false,
          },
        };
      case TodoActionTypes.FETCH_RECENT_TODOS:
        return {
          ...state,
          loaders: {
            ...state.loaders,
            recentTodos: true,
          },
        };
      case TodoActionTypes.FETCH_RECENT_TODOS_SUCCESS:
        return {
          ...state,
          recentTodos: action.payload,
          loaders: {
            ...state.loaders,
            recentTodos: false,
          },
        };
      case TodoActionTypes.FETCH_RECENT_TODOS_FAILURE:
        return {
          ...state,
          errors: {
            ...state.errors,
            recentTodos: action.payload,
          },
          loaders: {
            ...state.loaders,
            recentTodos: false,
          },
        };
      default:
        return state;
    }
};

export default todoReducer;
