import { RECEIVE_BENCHES, RECEIVE_BENCH, RECEIVE_REVIEW } from "../actions/bench_actions";

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    case RECEIVE_BENCH:
      const newBench = { [action.bench.id]: action.bench };
      return Object.assign({}, state, newBench);
    case RECEIVE_REVIEW:
      let { review } = action;
      const newState = Object.assign({}, state);
      newState[review.bench_id].reviewIds.push(review.id);
      return newState;
    default:
      return state;
  }
};

export default benchesReducer;