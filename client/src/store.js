import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming rootReducer combines all reducers
const store = createStore(rootReducer);
export default store;
