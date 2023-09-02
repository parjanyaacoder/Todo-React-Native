const actionTypePrefix = 'TODO'

export const TodoActionTypes = {
    FETCH_RECENT_TODOS: `${actionTypePrefix}/FETCH_RECENT_TODOS`,
    FETCH_RECENT_TODOS_SUCCESS: `${actionTypePrefix}/FETCH_RECENT_TODOS_SUCCESS`,
    FETCH_RECENT_TODOS_FAILURE: `${actionTypePrefix}/FETCH_RECENT_TODOS_FAILURE`,
    FETCH_DAILY_TODOS: `${actionTypePrefix}/FETCH_DAILY_TODOS`,
    FETCH_DAILY_TODOS_SUCCESS: `${actionTypePrefix}/FETCH_DAILY_TODOS_SUCCESS`,
    FETCH_DAILY_TODOS_FAILURE: `${actionTypePrefix}/FETCH_DAILY_TODOS_FAILURE`,
    FETCH_WEEKLY_TODOS: `${actionTypePrefix}/FETCH_WEEKLY_TODOS`,
    FETCH_WEEKLY_TODOS_SUCCESS: `${actionTypePrefix}/FETCH_WEEKLY_TODOS_SUCCESS`,
    FETCH_WEEKLY_TODOS_FAILURE: `${actionTypePrefix}/FETCH_WEEKLY_TODOS_FAILURE`,
    FETCH_MONTHLY_TODOS: `${actionTypePrefix}/FETCH_MONTHLY_TODOS`,
    FETCH_MONTHLY_TODOS_SUCCESS: `${actionTypePrefix}/FETCH_MONTHLY_TODOS_SUCCESS`,
    FETCH_MONTHLY_TODOS_FAILURE: `${actionTypePrefix}/FETCH_MONTHLY_TODOS_FAILURE`,
    CREATE_TODO: `${actionTypePrefix}/CREATE_TODO`,
    UPDATE_TODO: `${actionTypePrefix}/UPDATE_TODO`,  
};

const fetchDailyTodos = () => ({
    type: TodoActionTypes.FETCH_DAILY_TODOS,
});

const fetchDailyTodosSuccess = (payload) => ({
    type: TodoActionTypes.FETCH_DAILY_TODOS_SUCCESS,
    payload,
});

const fetchDailyTodosFailure = (error) => ({
    type: TodoActionTypes.FETCH_DAILY_TODOS_FAILURE,
    payload: error,
});

const fetchWeeklyTodos = () => ({
    type: TodoActionTypes.FETCH_WEEKLY_TODOS,
});

const fetchWeeklyTodosSuccess = (payload) => ({
    type: TodoActionTypes.FETCH_WEEKLY_TODOS_SUCCESS,
    payload,
});

const fetchWeeklyTodosFailure = (error) => ({
    type: TodoActionTypes.FETCH_WEEKLY_TODOS_FAILURE,
    payload: error,
});

const fetchMonthlyTodos = () => ({
    type: TodoActionTypes.FETCH_MONTHLY_TODOS,
});

const fetchMonthlyTodosSuccess = (payload) => ({
    type: TodoActionTypes.FETCH_MONTHLY_TODOS_SUCCESS,
    payload,
});

const fetchMonthlyTodosFailure = (error) => ({
    type: TodoActionTypes.FETCH_MONTHLY_TODOS_FAILURE,
    payload: error,
});

const fetchRecentTodos = () => ({
    type: TodoActionTypes.FETCH_RECENT_TODOS,
});

const fetchRecentTodosSuccess = (payload) => ({
    type: TodoActionTypes.FETCH_RECENT_TODOS_SUCCESS,
    payload,
});

const fetchRecentTodosFailure = (error) => ({
    type: TodoActionTypes.FETCH_RECENT_TODOS_FAILURE,
    payload: error,
});

const createTodo = (payload) => ({
    type: TodoActionTypes.CREATE_TODO,
    payload,
});

const updateTodo = (payload) => ({
    type: TodoActionTypes.UPDATE_TODO,
    payload,
});

const TodoActions = {
    fetchDailyTodos,
    fetchDailyTodosSuccess,
    fetchDailyTodosFailure,
    fetchWeeklyTodos,
    fetchWeeklyTodosSuccess,
    fetchWeeklyTodosFailure,
    fetchMonthlyTodos,
    fetchMonthlyTodosSuccess,
    fetchMonthlyTodosFailure,
    fetchRecentTodos,
    fetchRecentTodosSuccess,
    fetchRecentTodosFailure,
    createTodo,
    updateTodo
};

export default TodoActions;
