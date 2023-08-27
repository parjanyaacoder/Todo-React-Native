export const getDailyTodos = state => state.todoReducer.dailyTodos;

export const getMonthlyTodos = state => state.todoReducer.monthlyTodos;

export const getWeeklyTodos = state => state.todoReducer.weeklyTodos;

export const getRecentTodos = state => state.todoReducer.recentTodos;

export const getWeeklyTodosTotalCount = state => state.todoReducer.weeklyTodosTotalCount;

export const getRecentTodosTotalCount = state => state.todoReducer.recentTodosTotalCount;

export const getMonthlyTodosTotalCount = state => state.todoReducer.monthlyTodosTotalCount;

export const getDailyTodosTotalCount = state => state.todoReducer.dailyTodosTotalCount;

export const getDailyTodosLoader = state => state.todoReducer.loaders.dailyTodos;

export const getMonthlyTodosLoader = state => state.todoReducer.loaders.monthlyTodos;

export const getWeeklyTodosLoader = state => state.todoReducer.loaders.weeklyTodos;

export const getRecentTodosLoader = state => state.todoReducer.loaders.recentTodos;

export const getWeeklyTodosTotalCountLoader = state => state.todoReducer.loaders.weeklyTodosTotalCount;

export const getRecentTodosTotalCountLoader = state => state.todoReducer.loaders.recentTodosTotalCount;

export const getMonthlyTodosTotalCountLoader = state => state.todoReducer.loaders.monthlyTodosTotalCount;

export const getDailyTodosTotalCountLoader = state => state.todoReducer.loaders.dailyTodosTotalCount;

export const getDailyTodosError = state => state.todoReducer.errors.dailyTodos;

export const getMonthlyTodosError = state => state.todoReducer.errors.monthlyTodos;

export const getWeeklyTodosError = state => state.todoReducer.errors.weeklyTodos;

export const getRecentTodosError = state => state.todoReducer.errors.recentTodos;

export const getWeeklyTodosTotalCountError = state => state.todoReducer.errors.weeklyTodosTotalCount;

export const getRecentTodosTotalCountError = state => state.todoReducer.errors.recentTodosTotalCount;

export const getMonthlyTodosTotalCountError = state => state.todoReducer.errors.monthlyTodosTotalCount;

export const getDailyTodosTotalCountError = state => state.todoReducer.errors.dailyTodosTotalCount;

const TodoSelectors = {
    getDailyTodos,
    getRecentTodos,
    getWeeklyTodos,
    getMonthlyTodos,
    getDailyTodosTotalCount,
    getRecentTodosTotalCount,
    getWeeklyTodosTotalCount,
    getMonthlyTodosTotalCount,
    getDailyTodosLoader,
    getRecentTodosLoader,
    getWeeklyTodosLoader,
    getMonthlyTodosLoader,
    getDailyTodosTotalCountLoader,
    getRecentTodosTotalCountLoader,
    getWeeklyTodosTotalCountLoader,
    getMonthlyTodosTotalCountLoader,
    getDailyTodosError,
    getRecentTodosError,
    getWeeklyTodosError,
    getMonthlyTodosError,
    getDailyTodosTotalCountError,
    getRecentTodosTotalCountError,
    getWeeklyTodosTotalCountError,
    getMonthlyTodosTotalCountError
}

export default TodoSelectors