import { RECEIVE_BENCHES, RECEIVE_BENCH, RECEIVE_REVIEW } from "../actions/bench_actions";

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return Object.assign({}, action.benches);
    case RECEIVE_BENCH:
      const newBench = { [action.bench.id]: action.bench };
      return Object.assign({}, state, newBench);
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const newState = Object.assign({}, state);
      newState[review.bench_id].reviewIds.push(review.id);
      newState[review.bench_id].average_rating = average_rating;
      return newState;
    default:
      return state;
  }
};

export default benchesReducer;