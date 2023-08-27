const initialState = {
  dailyTodos: [],
  monthlyTodos: [],
  weeklyTodos: [],
  recentTodos: [],
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
