import { createStore } from 'redux';
import rootReducer from './configs/rootReducer';

const store = createStore(rootReducer);
export default store