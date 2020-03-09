import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_REVIEW,
  RECEIVE_BENCH
} from '../actions/bench_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { currentUser } = action;
      return Object.assign({}, state, { [currentUser.id]: currentUser });
    case RECEIVE_REVIEW:
      const { author } = action;
      return Object.assign({}, state, { [author.id]: author });
    case RECEIVE_BENCH:
      return Object.assign({}, state, action.authors);
    default:
      return state;
  }
};

export default usersReducer;