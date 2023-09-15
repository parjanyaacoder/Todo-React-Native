import { combineEpics, ofType } from "redux-observable";
import TodoActions, { TodoActionTypes } from "../actions/todo";
import { catchError, mergeMap } from "rxjs";
import apis from "../configs/api";
import { defaultHeaders, getRequestOptions, requestTypes } from "../utils/apiUtils";
import isEmpty from "../utils/isEmpty";

const fetchRecentTodos = ($action, store, { ajax }) => (
    $action.pipe(ofType(TodoActionTypes.FETCH_RECENT_TODOS), 
    mergeMap(() => {
        const api = apis.fetchRecentTodos()
        const requestOptions = getRequestOptions(api, requestTypes.GET, defaultHeaders)

        return ajax(requestOptions)
        .pipe(mergeMap(({response}) => {
            console.log('Parjanya', response)
            if (!isEmpty(response?.data)) {
                 return [TodoActions.fetchRecentTodosSuccess(response?.data)]
            }
        }),
        catchError(err => [TodoActions.fetchRecentTodosFailure(err)])
        )
    }))
)

const fetchDailyTodos = ($action, store, { ajax }) => (
    $action.pipe(ofType(TodoActionTypes.FETCH_DAILY_TODOS), 
    mergeMap(() => {
        const api = apis.fetchDailyTodos()
        const requestOptions = getRequestOptions(api, requestTypes.GET, defaultHeaders)

        return ajax(requestOptions)
        .pipe(mergeMap(({response}) => {
            console.log('Parjanya', response)
            if (!isEmpty(response?.data)) {
                 return [TodoActions.fetchDailyTodosSuccess(response?.data)]
            }
        }),
        catchError(err => [TodoActions.fetchDailyTodosFailure(err)]))
    }))
)

const fetchMonthlyTodos = ($action, store, { ajax }) => (
    $action.pipe(ofType(TodoActionTypes.FETCH_MONTHLY_TODOS), 
    mergeMap(() => {
        const api = apis.fetchMonthlyTodos()
        const requestOptions = getRequestOptions(api, requestTypes.GET, defaultHeaders)

        return ajax(requestOptions)
        .pipe(mergeMap(({response}) => {
            console.log('Parjanya', response)
            if (!isEmpty(response?.data)) {
                 return [TodoActions.fetchMonthlyTodosSuccess(response?.data)]
            }
        }),
        catchError(err => [TodoActions.fetchMonthlyTodosFailure(err)]))
    }))
)

const fetchWeeklyTodos = ($action, store, { ajax }) => (
    $action.pipe(ofType(TodoActionTypes.FETCH_WEEKLY_TODOS), 
    mergeMap(() => {
        const api = apis.fetchWeeklyTodos()
        const requestOptions = getRequestOptions(api, requestTypes.GET, defaultHeaders)

        return ajax(requestOptions)
        .pipe(mergeMap(({response}) => {
            console.log('Parjanya', response)
            if (!isEmpty(response?.data)) {
                 return [TodoActions.fetchWeeklyTodosSuccess(response?.data)]
            }
        }),
        catchError(err => [TodoActions.fetchWeeklyTodosFailure(err)]))
    }))
)

const createTodo = ($action, store, { ajax }) => (
    $action.pipe(ofType(TodoActionTypes.CREATE_TODO), 
    mergeMap(({payload}) => {
        const api = apis.createTodo()
        const { cb }  = payload || {}
        const body = {
            title: payload?.title,
            description: payload?.description,
            date: payload?.date
        }
        const requestOptions = getRequestOptions(api, requestTypes.POST, defaultHeaders, body)
        return ajax(requestOptions)
        .pipe(mergeMap(({response}) => {ś
            if (!isEmpty(response?.data)) {
                cb?.(null, response?.data)
                 return []
            }
            cb?.(null,  response?.data)
            return []
        }),
        catchError(err => {cb?.(err)
            return []
        })
        )
    }))
)

export default combineEpics(
    fetchRecentTodos,
    fetchDailyTodos,
    fetchMonthlyTodos,
    fetchWeeklyTodos,
    createTodo
)