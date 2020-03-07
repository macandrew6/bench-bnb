import { combineReducers } from 'redux';

import users from './users_reducer';
import benches from './benches_reducer';
import reviews from './reviews_reducer';

const entitiesReducer = combineReducers({
  users,
  benches,
  reviews
});

export default entitiesReducer;