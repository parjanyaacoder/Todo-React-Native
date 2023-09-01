import { applyMiddleware, compose, createStore } from 'redux';
import ajax from './ajax';
import rootReducer from './rootReducer';
import { createEpicMiddleware } from "redux-observable";
import rootEpic from './rootEpic';
import { window } from 'rxjs';

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = (store) => {
    const rootEpicMiddleware = createEpicMiddleware({ dependencies: {ajax, dispatch: store.dispatch} })
    epicMiddleware.run = rootEpicMiddleware.run
    return rootEpicMiddleware(store)
}

const store = createStore(rootReducer,componseEnhancers(applyMiddleware(epicMiddleware)));





epicMiddleware.run(rootEpic)

export default store