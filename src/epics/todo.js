import { combineEpics, ofType } from "redux-observable";
import TodoActions, { TodoActionTypes } from "../actions/todo";
import { catchError, mergeMap } from "rxjs";
import apis from "../configs/api";
import { defaultHeaders, getRequestOptions, requestTypes } from "../utils/apiUtils";

const fetchRecentTodos = ($action, store, { ajax }) => (
    $action.pipe(ofType(TodoActionTypes.FETCH_RECENT_TODOS), 
    mergeMap(() => {
        const api = apis.fetchRecentTodos()
        const requestOptions = getRequestOptions(api, requestTypes.GET, defaultHeaders)

        return ajax(requestOptions)
        .pipe(mergeMap(({response}) => {
            console.log('Parjanya', response)
            return [TodoActions.fetchRecentTodosSuccess(response?.data)]
        }),
        catchError(err => [TodoActions.fetchRecentTodosFailure(err)])
        )
    }))
)

export default combineEpics(
    fetchRecentTodos
)