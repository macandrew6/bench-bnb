import { combineReducers } from 'redux';
import filtersReducer from './filters_reducer';

// adding a new slice of state => ref pokedex
// loading slice of state
// loading slice of state should be updated via actions 
  // (action done on receive bench)
const uiReducer = combineReducers({
  filters: filtersReducer
});

export default uiReducer;