import {
  START_LOADING_SINGLE_BENCH,
  START_LOADING_ALL_BENCHES,
  RECEIVE_BENCHES,
  RECEIVE_BENCH
} from "../actions/bench_actions";

const initState = {
  indexLoading: false,
  singleLoading: false
};

const loadingReducer = (state = initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_BENCH:
      return Object.assign({}, state, { singleLoading: false });
    case START_LOADING_ALL_BENCHES:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_SINGLE_BENCH:
      return Object.assign({}, state, { singleLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;
