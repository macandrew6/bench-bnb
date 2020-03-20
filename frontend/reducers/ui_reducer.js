import { combineReducers } from 'redux';
import filtersReducer from './filters_reducer';

// adding a new slice of state => ref pokedex
// loading slice of state
const uiReducer = combineReducers({
  filters: filtersReducer
});

export default uiReducer;