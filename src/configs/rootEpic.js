import { combineEpics } from 'redux-observable';
import todoEpic from '../epics/todo';

const rootEpic = combineEpics(
  todoEpic
);

export default rootEpic;
